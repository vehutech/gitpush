gitpush() {
  local branch target_branch stashed=0
  
  git rev-parse --git-dir > /dev/null 2>&1 || { echo "❌ Not a git repository"; return 1; }
  
  # Get current branch
  branch=$(git branch --show-current)
  [ -z "$branch" ] && echo "❌ Detached HEAD state" && return 1
  
  # Check if last argument is a branch flag
  local commit_msg=""
  if [[ "${@: -2:1}" == "-b" ]] || [[ "${@: -2:1}" == "--branch" ]]; then
    target_branch="${@: -1}"
    commit_msg="${@:1:$(($# - 2))}"
  else
    target_branch="$branch"
    commit_msg="$*"
  fi
  
  [ -z "$commit_msg" ] && echo "❌ Commit message required" && return 1
  
  # Abort any ongoing rebase/merge
  if [ -d .git/rebase-merge ] || [ -d .git/rebase-apply ]; then
    echo "⚠️  Aborting ongoing rebase..."
    git rebase --abort 2>/dev/null
  fi
  
  git add .
  
  git diff --cached --quiet && {
    echo "ℹ️  Nothing staged to commit"
    ! git diff --quiet && echo "⚠️  Unstaged changes detected:" && git status --short
    return 0
  }
  
  git commit -m "$commit_msg" || { echo "❌ Commit failed"; return 1; }
  echo "✅ Committed: $commit_msg"
  
  # Store commit hash for potential recovery
  local commit_hash=$(git rev-parse HEAD)
  
  # Capture working tree state
  if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "⚠️  Changes detected after commit - stashing..."
    git stash push -u -m "gitpush-auto: $(date +%Y-%m-%d_%H:%M:%S)" || {
      echo "❌ Stash failed"
      return 1
    }
    stashed=1
  fi
  
  # Show branch info if different from current
  if [ "$branch" != "$target_branch" ]; then
    echo "📍 Current branch: $branch"
    echo "🎯 Target branch: $target_branch"
  fi
  
  echo "⬇️  Pulling from origin/$target_branch..."
  if ! git pull --rebase origin "$target_branch"; then
    echo ""
    echo "❌ REBASE CONFLICT DETECTED"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Your commit is safe at: $commit_hash"
    [ $stashed -eq 1 ] && echo "Your stashed changes: git stash list (top entry)"
    echo ""
    echo "📋 OPTION 1: Resolve conflicts manually"
    echo "   1. Fix conflicts in your editor"
    echo "   2. git add <resolved-files>"
    echo "   3. git rebase --continue"
    echo "   4. git push origin $target_branch"
    [ $stashed -eq 1 ] && echo "   5. git stash pop"
    echo ""
    echo "📋 OPTION 2: Abort and start over"
    echo "   1. git rebase --abort"
    [ $stashed -eq 1 ] && echo "   2. git stash pop"
    echo "   3. Manually resolve with: git pull origin $target_branch"
    echo ""
    echo "📋 OPTION 3: Use a helper function"
    echo "   Run: gitpush-continue"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    return 1
  fi
  
  echo "⬆️  Pushing to origin/$target_branch..."
  if ! git push origin "$branch:$target_branch"; then
    echo "❌ Push failed"
    [ $stashed -eq 1 ] && echo "⚠️  Run 'git stash pop' to restore changes"
    return 1
  fi
  
  echo "✅ Successfully pushed to origin/$target_branch"
  
  if [ $stashed -eq 1 ]; then
    echo "♻️  Restoring stashed changes..."
    git stash pop && echo "✅ Changes restored" || {
      echo "⚠️  Stash pop conflicts - resolve with 'git stash pop'"
      return 1
    }
  fi
}

# Companion function to continue after resolving conflicts
gitpush-continue() {
  local branch target_branch
  
  # Check if we're in a rebase
  if [ ! -d .git/rebase-merge ] && [ ! -d .git/rebase-apply ]; then
    echo "❌ No rebase in progress"
    return 1
  fi
  
  branch=$(git branch --show-current 2>/dev/null)
  
  # Try to get target branch from rebase state
  if [ -f .git/rebase-merge/head-name ]; then
    target_branch=$(cat .git/rebase-merge/head-name | sed 's|refs/heads/||')
  else
    target_branch="$branch"
  fi
  
  echo "📝 Checking for resolved conflicts..."
  
  # Check if there are still conflicts
  if git diff --name-only --diff-filter=U | grep -q .; then
    echo "❌ You still have unresolved conflicts:"
    git diff --name-only --diff-filter=U
    echo ""
    echo "💡 Resolve them, then run 'gitpush-continue' again"
    return 1
  fi
  
  echo "✅ All conflicts resolved"
  echo "⬆️  Continuing rebase and pushing..."
  
  git rebase --continue || {
    echo "❌ Rebase continue failed"
    return 1
  }
  
  git push origin "$branch:$target_branch" || {
    echo "❌ Push failed"
    return 1
  }
  
  echo "✅ Successfully pushed!"
  
  # Check for stashed changes
  if git stash list | grep -q "gitpush-auto"; then
    echo "♻️  Restoring stashed changes..."
    git stash pop
  fi
}

# Companion function to abort and cleanup
gitpush-abort() {
  echo "🔄 Aborting rebase..."
  git rebase --abort 2>/dev/null
  
  echo "♻️  Restoring stashed changes..."
  if git stash list | grep -q "gitpush-auto"; then
    git stash pop
    echo "✅ Cleanup complete"
  else
    echo "ℹ️  No stashed changes found"
  fi
}