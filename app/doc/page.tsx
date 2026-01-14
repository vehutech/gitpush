import { Terminal, Zap, GitBranch, Shield, CheckCircle, AlertCircle, ArrowLeft, Copy } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                gitpush
              </span>
            </div>
          </Link>
          <a
            href="https://github.com/vehutech/gitpush"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700 text-sm"
          >
            View on GitHub
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <NavLink href="#installation">Installation</NavLink>
              <NavLink href="#usage">Usage</NavLink>
              <NavLink href="#conflict-resolution">Conflict Resolution</NavLink>
              <NavLink href="#examples">Examples</NavLink>
              <NavLink href="#advanced">Advanced Features</NavLink>
              <NavLink href="#commands">Commands Reference</NavLink>
              <NavLink href="#troubleshooting">Troubleshooting</NavLink>
              <NavLink href="#best-practices">Best Practices</NavLink>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-16">
            {/* Introduction */}
            <section>
              <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                A robust shell function that streamlines your git workflow by combining add, commit, pull, and push into a single command with intelligent conflict handling.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <FeatureBadge icon={<Zap />} text="Smart Workflow" />
                <FeatureBadge icon={<GitBranch />} text="Branch Aware" />
                <FeatureBadge icon={<Shield />} text="Conflict Safe" />
              </div>
            </section>

            {/* Installation */}
            <section id="installation">
              <SectionTitle>Installation</SectionTitle>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Quick Install (Recommended)</h3>
                  <CodeBlock language="bash">
{`curl -o ~/gitpush.sh https://raw.githubusercontent.com/vehutech/gitpush/main/public/gitpush.sh && \\
echo 'source ~/gitpush.sh' >> ~/.bashrc && \\
source ~/.bashrc`}
                  </CodeBlock>
                  <p className="text-gray-400 mt-2 text-sm">For Zsh users, replace <code className="text-cyan-400">~/.bashrc</code> with <code className="text-cyan-400">~/.zshrc</code></p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Manual Installation</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">1</span>
                        Download the script
                      </h4>
                      <CodeBlock language="bash">
{`curl -o ~/gitpush.sh https://raw.githubusercontent.com/vehutech/gitpush/main/public/gitpush.sh`}
                      </CodeBlock>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">2</span>
                        Add to your shell configuration
                      </h4>
                      <CodeBlock language="bash">
{`# For Bash
echo 'source ~/gitpush.sh' >> ~/.bashrc

# For Zsh
echo 'source ~/gitpush.sh' >> ~/.zshrc`}
                      </CodeBlock>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">3</span>
                        Reload your shell
                      </h4>
                      <CodeBlock language="bash">
{`source ~/.bashrc  # or source ~/.zshrc`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Verify Installation</h3>
                  <CodeBlock language="bash">
{`type gitpush
# Should output: gitpush is a function`}
                  </CodeBlock>
                </div>
              </div>
            </section>

            {/* Usage */}
            <section id="usage">
              <SectionTitle>Usage</SectionTitle>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Basic Usage</h3>
                  <CodeBlock language="bash">
{`# Push to current branch
gitpush "your commit message"

# Example
gitpush "feat: added product-service middleware using express"`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Push to Specific Branch</h3>
                  <CodeBlock language="bash">
{`# Using -b flag
gitpush "commit message" -b branch-name

# Using --branch flag
gitpush "commit message" --branch branch-name

# Examples
gitpush "fix: typo in README" -b develop
gitpush "hotfix: critical security patch" --branch main`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Working Across Branches</h3>
                  <CodeBlock language="bash">
{`# You're on feature/new-api, but want to push to develop
git checkout feature/new-api
gitpush "feat: new endpoint" -b develop

# Output:
# 📍 Current branch: feature/new-api
# 🎯 Target branch: develop`}
                  </CodeBlock>
                </div>
              </div>
            </section>

            {/* Conflict Resolution */}
            <section id="conflict-resolution">
              <SectionTitle>Conflict Resolution</SectionTitle>
              
              <p className="text-gray-400 mb-6">
                When conflicts occur during rebase, gitpush provides three options:
              </p>

              <div className="space-y-6">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-green-400">Option 1:</span> Resolve Manually (Recommended)
                  </h3>
                  <CodeBlock language="bash">
{`# 1. Open conflicted files and resolve conflicts
# 2. Stage resolved files
git add path/to/resolved-file.js

# 3. Continue the process
gitpush-continue`}
                  </CodeBlock>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-blue-400">Option 2:</span> Use Helper (Easiest)
                  </h3>
                  <CodeBlock language="bash">
{`# 1. Fix conflicts in your editor
# 2. git add <files>
# 3. Run the helper
gitpush-continue  # Automatically continues rebase, pushes, and restores stashed changes`}
                  </CodeBlock>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-yellow-400">Option 3:</span> Abort and Start Over
                  </h3>
                  <CodeBlock language="bash">
{`gitpush-abort  # Aborts rebase and restores stashed changes`}
                  </CodeBlock>
                </div>
              </div>
            </section>

            {/* Examples */}
            <section id="examples">
              <SectionTitle>Examples</SectionTitle>
              
              <div className="space-y-6">
                <ExampleCard
                  title="Simple Commit and Push"
                  code={`$ gitpush "docs: update README"
✅ Committed: docs: update README
⬇️  Pulling from origin/main...
⬆️  Pushing to origin/main...
✅ Successfully pushed to origin/main`}
                />

                <ExampleCard
                  title="Push to Different Branch"
                  code={`$ gitpush "feat: add authentication" -b develop
✅ Committed: feat: add authentication
📍 Current branch: feature/auth
🎯 Target branch: develop
⬇️  Pulling from origin/develop...
⬆️  Pushing to origin/develop...
✅ Successfully pushed to origin/develop`}
                />

                <ExampleCard
                  title="Handling Unstaged Changes"
                  code={`$ gitpush "fix: resolve bug"
✅ Committed: fix: resolve bug
⚠️  Changes detected after commit - stashing...
⬇️  Pulling from origin/main...
⬆️  Pushing to origin/main...
✅ Successfully pushed to origin/main
♻️  Restoring stashed changes...
✅ Changes restored`}
                />

                <ExampleCard
                  title="Conflict Resolution Flow"
                  code={`$ gitpush "feat: new feature"
✅ Committed: feat: new feature
⬇️  Pulling from origin/main...

❌ REBASE CONFLICT DETECTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Your commit is safe at: a1b2c3d

# Fix conflicts, then:
$ git add conflicted-file.js
$ gitpush-continue
📝 Checking for resolved conflicts...
✅ All conflicts resolved
⬆️  Continuing rebase and pushing...
✅ Successfully pushed!`}
                />
              </div>
            </section>

            {/* Advanced Features */}
            <section id="advanced">
              <SectionTitle>Advanced Features</SectionTitle>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Auto-stash Protection</h3>
                  <p className="text-gray-400 mb-4">
                    The function automatically stashes unstaged changes that appear after committing (e.g., from file watchers or build tools):
                  </p>
                  <CodeBlock language="bash">
{`$ gitpush "build: update dependencies"
✅ Committed: build: update dependencies
⚠️  Changes detected after commit - stashing...
# ... completes push ...
♻️  Restoring stashed changes...
✅ Changes restored`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Nothing to Commit</h3>
                  <CodeBlock language="bash">
{`$ gitpush "empty commit"
ℹ️  Nothing staged to commit
⚠️  Unstaged changes detected:
 M untracked-file.txt`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Error Recovery</h3>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <p className="text-gray-400 mb-4">All errors preserve your work:</p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <span>Failed commits don&apos;t stash or push</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <span>Failed pulls keep your stashed changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <span>Failed pushes tell you how to recover</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Commands Reference */}
            <section id="commands">
              <SectionTitle>Commands Reference</SectionTitle>
              
              <div className="space-y-4">
                <CommandRefCard
                  command="gitpush"
                  args='"message" [-b branch]'
                  description="Main command to add, commit, pull with rebase, and push to remote. Handles all edge cases automatically."
                />
                <CommandRefCard
                  command="gitpush-continue"
                  description="Continue workflow after resolving conflicts. Checks for unresolved conflicts, continues rebase, pushes, and restores stashed changes."
                />
                <CommandRefCard
                  command="gitpush-abort"
                  description="Abort rebase and restore stashed changes. Clean abort with full cleanup of working directory."
                />
              </div>

              <div className="mt-8 bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Git 2.0+</li>
                  <li>• Bash 4.0+ or Zsh 5.0+</li>
                  <li>• Remote repository configured (origin)</li>
                  <li>• curl (for installation)</li>
                </ul>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting">
              <SectionTitle>Troubleshooting</SectionTitle>
              
              <div className="space-y-4">
                <TroubleshootCard
                  title='"Not a git repository"'
                  description="You're not in a git repository."
                  solution='Run git init or cd into a git project.'
                />
                <TroubleshootCard
                  title='"Detached HEAD state"'
                  description="You're not on a branch."
                  solution='Create or checkout a branch: git checkout -b new-branch'
                />
                <TroubleshootCard
                  title='"Commit message required"'
                  description="You forgot the commit message."
                  solution='Provide a message: gitpush "your message here"'
                />
                <TroubleshootCard
                  title='Stash conflicts after gitpush-continue'
                  description="Your stashed changes conflict with rebased code."
                  solution='Run git status, fix conflicts, then: git add . && git stash drop'
                />
                <TroubleshootCard
                  title='"Command not found"'
                  description="The script isn't sourced in your current shell."
                  solution='Reload: source ~/.bashrc or verify: grep "gitpush.sh" ~/.bashrc'
                />
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices">
              <SectionTitle>Best Practices</SectionTitle>
              
              <div className="grid md:grid-cols-2 gap-4">
                <BestPracticeCard
                  icon={<CheckCircle className="w-6 h-6 text-green-400" />}
                  title="Use descriptive commit messages"
                  description="Follow Conventional Commits format for clarity"
                  type="success"
                />
                <BestPracticeCard
                  icon={<CheckCircle className="w-6 h-6 text-green-400" />}
                  title="Pull before major changes"
                  description="Run git pull before starting work"
                  type="success"
                />
                <BestPracticeCard
                  icon={<CheckCircle className="w-6 h-6 text-green-400" />}
                  title="Review before pushing"
                  description="Check git status if unsure"
                  type="success"
                />
                <BestPracticeCard
                  icon={<CheckCircle className="w-6 h-6 text-green-400" />}
                  title="Keep commits atomic"
                  description="One logical change per commit"
                  type="success"
                />
                <BestPracticeCard
                  icon={<AlertCircle className="w-6 h-6 text-yellow-400" />}
                  title="Don't force push"
                  description="This function doesn't force push for safety"
                  type="warning"
                />
              </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-linear-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-gray-400 mb-8">Install gitpush now and streamline your workflow</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Back to Home
                </Link>
                <a
                  href="https://github.com/vehutech/gitpush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold transition-all"
                >
                  View on GitHub
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors"
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      {children}
    </h2>
  );
}

function CodeBlock({ children }: { language: string; children: string }) {
  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
          <Copy className="w-4 h-4" />
        </button>
      </div>
      <pre className="bg-black/50 border border-gray-700 rounded-xl p-6 overflow-x-auto">
        <code className="text-cyan-400 text-sm font-mono">{children}</code>
      </pre>
    </div>
  );
}

function FeatureBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-lg p-4">
      <div className="text-cyan-400">{icon}</div>
      <span className="font-semibold">{text}</span>
    </div>
  );
}

function ExampleCard({ title, code }: { title: string; code: string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="px-6 py-4 bg-gray-800 border-b border-gray-700">
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="p-6">
        <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function CommandRefCard({ command, args, description }: { command: string; args?: string; description: string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
      <div className="font-mono text-lg mb-3">
        <span className="text-cyan-400">{command}</span>
        {args && <span className="text-gray-500"> {args}</span>}
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TroubleshootCard({ title, description, solution }: { title: string; description: string; solution: string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-2 text-red-400">{title}</h3>
      <p className="text-gray-400 mb-3">{description}</p>
      <div className="bg-black/50 border border-gray-700 rounded-lg p-4">
        <p className="text-sm text-cyan-400 font-mono">{solution}</p>
      </div>
    </div>
  );
}

function BestPracticeCard({ icon, title, description, type }: { icon: React.ReactNode; title: string; description: string; type: 'success' | 'warning' }) {
  return (
    <div className={`bg-gray-900 border ${type === 'success' ? 'border-green-500/20' : 'border-yellow-500/20'} rounded-xl p-6`}>
      <div className="flex items-start gap-3">
        <div className="shrink-0">{icon}</div>
        <div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}