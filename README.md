# gitpush

A robust shell function that streamlines your git workflow by combining add, commit, pull, and push into a single command with intelligent conflict handling.

## Features

✨ **Smart Workflow** - Add, commit, pull with rebase, and push in one command  
🔀 **Branch Aware** - Push to current branch or specify a target branch  
🛡️ **Conflict Safe** - Detects and helps resolve merge conflicts gracefully  
💾 **Auto-stash** - Automatically handles unstaged changes  
📦 **Edge Case Handling** - Handles race conditions, file watchers, and more  
🎯 **Clear Feedback** - Emoji-rich status messages at every step

## Installation

### Quick Install (Recommended)

```bash
curl -o ~/gitpush.sh https://raw.githubusercontent.com/vehutech/gitpush/main/public/gitpush.sh && \
echo 'source ~/gitpush.sh' >> ~/.bashrc && \
source ~/.bashrc
```

For Zsh users, replace `~/.bashrc` with `~/.zshrc`

### Manual Installation

**Step 1:** Download the script

```bash
curl -o ~/gitpush.sh https://raw.githubusercontent.com/vehutech/gitpush/main/public/gitpush.sh
# Or download directly from: https://github.com/vehutech/gitpush
```

**Step 2:** Add to your shell configuration

For Bash:
```bash
echo 'source ~/gitpush.sh' >> ~/.bashrc
```

For Zsh:
```bash
echo 'source ~/gitpush.sh' >> ~/.zshrc
```

**Step 3:** Reload your shell

```bash
source ~/.bashrc  # or source ~/.zshrc
```

### Alternative: Direct Download

Visit [vehutech.com](https://vehutech.com) or [GitHub](https://github.com/vehutech/gitpush) and download `gitpush.sh`, then manually add to your shell config.

### Verify Installation

```bash
# Check if gitpush is available
type gitpush
# Should output: gitpush is a function
```

## Usage

### Basic Usage

```bash
# Push to current branch
gitpush "your commit message"

# Example
gitpush "feat: added product-service middleware using express"
```

### Push to Specific Branch

```bash
# Using -b flag
gitpush "commit message" -b branch-name

# Using --branch flag
gitpush "commit message" --branch branch-name

# Examples
gitpush "fix: typo in README" -b develop
gitpush "hotfix: critical security patch" --branch main
```

### Working Across Branches

```bash
# You're on feature/new-api, but want to push to develop
git checkout feature/new-api
gitpush "feat: new endpoint" -b develop

# Output:
# 📍 Current branch: feature/new-api
# 🎯 Target branch: develop
```

## Conflict Resolution

When conflicts occur during rebase, `gitpush` provides three options:

### Option 1: Resolve Manually (Recommended)

```bash
# After conflict message appears:
# 1. Open conflicted files and resolve conflicts
# 2. Stage resolved files
git add path/to/resolved-file.js

# 3. Continue the process
gitpush-continue
```

### Option 2: Use Helper (Easiest)

```bash
# 1. Fix conflicts in your editor
# 2. git add <files>
# 3. Run the helper
gitpush-continue  # Automatically continues rebase, pushes, and restores stashed changes
```

### Option 3: Abort and Start Over

```bash
gitpush-abort  # Aborts rebase and restores stashed changes
```

## Examples

### Simple Commit and Push

```bash
$ gitpush "docs: update README"
✅ Committed: docs: update README
⬇️  Pulling from origin/main...
⬆️  Pushing to origin/main...
✅ Successfully pushed to origin/main
```

### Push to Different Branch

```bash
$ gitpush "feat: add authentication" -b develop
✅ Committed: feat: add authentication
📍 Current branch: feature/auth
🎯 Target branch: develop
⬇️  Pulling from origin/develop...
⬆️  Pushing to origin/develop...
✅ Successfully pushed to origin/develop
```

### Handling Unstaged Changes

```bash
$ gitpush "fix: resolve bug"
✅ Committed: fix: resolve bug
⚠️  Changes detected after commit - stashing...
⬇️  Pulling from origin/main...
⬆️  Pushing to origin/main...
✅ Successfully pushed to origin/main
♻️  Restoring stashed changes...
✅ Changes restored
```

### Conflict Resolution Flow

```bash
$ gitpush "feat: new feature"
✅ Committed: feat: new feature
⬇️  Pulling from origin/main...

❌ REBASE CONFLICT DETECTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Your commit is safe at: a1b2c3d
Your stashed changes: git stash list (top entry)

📋 OPTION 1: Resolve conflicts manually
   1. Fix conflicts in your editor
   2. git add <resolved-files>
   3. git rebase --continue
   4. git push origin main
   5. git stash pop

📋 OPTION 2: Abort and start over
   1. git rebase --abort
   2. git stash pop
   3. Manually resolve with: git pull origin main

📋 OPTION 3: Use a helper function
   Run: gitpush-continue
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Fix conflicts, then:
$ git add conflicted-file.js
$ gitpush-continue
📝 Checking for resolved conflicts...
✅ All conflicts resolved
⬆️  Continuing rebase and pushing...
✅ Successfully pushed!
♻️  Restoring stashed changes...
```

## Advanced Features

### Auto-stash Protection

The function automatically stashes unstaged changes that appear after committing (e.g., from file watchers or build tools):

```bash
# Your build tool modifies files during commit
$ gitpush "build: update dependencies"
✅ Committed: build: update dependencies
⚠️  Changes detected after commit - stashing...
# ... completes push ...
♻️  Restoring stashed changes...
✅ Changes restored
```

### Nothing to Commit

```bash
$ gitpush "empty commit"
ℹ️  Nothing staged to commit
⚠️  Unstaged changes detected:
 M untracked-file.txt
```

### Error Recovery

All errors preserve your work:
- Failed commits don't stash or push
- Failed pulls keep your stashed changes
- Failed pushes tell you how to recover

## Commands Reference

| Command | Description |
|---------|-------------|
| `gitpush "message"` | Commit and push to current branch |
| `gitpush "message" -b branch` | Commit and push to specified branch |
| `gitpush-continue` | Continue after resolving conflicts |
| `gitpush-abort` | Abort rebase and restore stashed changes |

## Requirements

- Git 2.0+
- Bash 4.0+ or Zsh 5.0+
- Remote repository configured (origin)
- curl (for installation)

## How It Works

1. **Validates** - Checks you're in a git repo and on a valid branch
2. **Stages** - Runs `git add .` to stage all changes
3. **Commits** - Creates a commit with your message
4. **Stashes** - Auto-stashes any unstaged changes (edge case protection)
5. **Pulls** - Rebases against remote branch
6. **Pushes** - Pushes your commit to remote
7. **Restores** - Pops stashed changes back if any

## Troubleshooting

### "Not a git repository"
You're not in a git repository. Run `git init` or `cd` into a git project.

### "Detached HEAD state"
You're not on a branch. Create or checkout a branch first:
```bash
git checkout -b new-branch
```

### "Commit message required"
You forgot the commit message:
```bash
gitpush "your message here"
```

### Stash conflicts after `gitpush-continue`
Your stashed changes conflict with rebased code:
```bash
# View conflicts
git status

# Fix conflicts, then
git add .
git stash drop  # Remove the problematic stash
```

### Command not found
The script isn't sourced in your current shell:
```bash
# Reload your shell config
source ~/.bashrc  # or source ~/.zshrc

# Or verify it's in your config file
grep "gitpush.sh" ~/.bashrc
```

## Tips & Best Practices

✅ **Use descriptive commit messages** - Follow [Conventional Commits](https://www.conventionalcommits.org/)  
✅ **Pull before major changes** - Run `git pull` before starting work  
✅ **Review before pushing** - Check `git status` if unsure  
✅ **Keep commits atomic** - One logical change per commit  
⚠️ **Don't force push** - This function doesn't force push for safety

## Uninstallation

To remove gitpush:

```bash
# Remove the script
rm ~/gitpush.sh

# Remove from shell config
# For Bash
sed -i '/source ~\/gitpush.sh/d' ~/.bashrc

# For Zsh
sed -i '/source ~\/gitpush.sh/d' ~/.zshrc

# Reload shell
source ~/.bashrc  # or source ~/.zshrc
```

## Contributing

Found a bug or have a feature request? 

- 🐛 [Report an issue](https://github.com/vehutech/gitpush/issues)
- 💡 [Request a feature](https://github.com/vehutech/gitpush/issues/new)
- 🔧 [Submit a pull request](https://github.com/vehutech/gitpush/pulls)

## License

MIT License - Feel free to use and modify

## Credits

Created to handle edge cases in git workflows, including:
- File watcher modifications during commits
- Build tool race conditions
- Unstaged changes after commits
- Complex rebase scenarios

For developers who value speed and reliability.

---

**Happy committing! 🚀**

[Website](https://vehutech.com) • [GitHub](https://github.com/vehutech/gitpush)