import { Terminal, Zap, Shield, GitBranch, Code, Download, Github, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Hero Section */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              gitpush
            </span>
          </div>
          <a
            href="https://github.com/vehutech/gitpush"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">Star on GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
            <Zap className="w-4 h-4" />
            <span>Smart Git Workflow Automation</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              One Command.
            </span>
            <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Complete Workflow.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Add, commit, pull, and push in a single command. Built for developers who value speed and reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#install"
              className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold text-lg transition-all"
            >
              View Demo
            </a>
          </div>
        </div>

        {/* Terminal Demo */}
        <div className="mt-20 max-w-4xl mx-auto" id="demo">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-gray-400 ml-4">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-green-400">$</span>
                <span className="text-gray-300">gitpush &quot;feat: added product-service middleware&quot;</span>
              </div>
              <div className="text-green-400 pl-4">✅ Committed: feat: added product-service middleware</div>
              <div className="text-cyan-400 pl-4">⬇️  Pulling from origin/main...</div>
              <div className="text-cyan-400 pl-4">⬆️  Pushing to origin/main...</div>
              <div className="text-green-400 pl-4">✅ Successfully pushed to origin/main</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Built for Modern Workflows
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Lightning Fast"
            description="Combine add, commit, pull, and push into one command. Save precious seconds on every commit."
            gradient="from-yellow-500 to-orange-500"
          />
          <FeatureCard
            icon={<GitBranch className="w-8 h-8" />}
            title="Branch Aware"
            description="Push to current branch or specify a target. Seamlessly switch between workflows."
            gradient="from-cyan-500 to-blue-500"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Conflict Safe"
            description="Intelligent conflict detection with auto-stash and clear recovery instructions."
            gradient="from-green-500 to-emerald-500"
          />
          <FeatureCard
            icon={<Code className="w-8 h-8" />}
            title="Edge Cases Handled"
            description="Handles file watchers, build tools, and race conditions automatically."
            gradient="from-purple-500 to-pink-500"
          />
          <FeatureCard
            icon={<Terminal className="w-8 h-8" />}
            title="Native Shell"
            description="Pure Bash/Zsh implementation. No dependencies, no runtime overhead."
            gradient="from-blue-500 to-indigo-500"
          />
          <FeatureCard
            icon={<CheckCircle className="w-8 h-8" />}
            title="Battle Tested"
            description="Comprehensive error handling and recovery. Your work is always safe."
            gradient="from-red-500 to-rose-500"
          />
        </div>
      </section>

      {/* Installation */}
      <section className="max-w-7xl mx-auto px-6 py-20" id="install">
        <div className="bg-linear-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quick Installation</h2>
            <p className="text-gray-400">Get started in seconds</p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <InstallStep
              number="1"
              title="Download gitpush.sh"
              code="curl -o ~/gitpush.sh https://raw.githubusercontent.com/vehutech/gitpush/main/gitpush.sh"
            />
            <InstallStep
              number="2"
              title="Add to your shell config"
              code="echo 'source ~/gitpush.sh' >> ~/.bashrc  # or ~/.zshrc"
            />
            <InstallStep
              number="3"
              title="Reload your shell"
              code="source ~/.bashrc  # or source ~/.zshrc"
            />
            <InstallStep
              number="4"
              title="Start using it!"
              code='gitpush "your commit message"'
            />
          </div>

          <div className="mt-12 text-center">
            <a
              href="/gitpush.sh"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <Download className="w-5 h-5" />
              Download gitpush.sh
            </a>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Usage Examples
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <UsageExample
            title="Basic Usage"
            description="Push to current branch"
            code='gitpush "feat: new feature"'
          />
          <UsageExample
            title="Specify Branch"
            description="Push to a different branch"
            code='gitpush "fix: bug" -b develop'
          />
          <UsageExample
            title="After Conflicts"
            description="Continue after resolving"
            code="# Fix conflicts, then:\ngitpush-continue"
          />
          <UsageExample
            title="Abort Changes"
            description="Clean abort and restore"
            code="gitpush-abort"
          />
        </div>
      </section>

      {/* Commands Reference */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Available Commands</h2>
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          <CommandCard
            command="gitpush"
            args='"message" [-b branch]'
            description="Main command to add, commit, pull, and push"
          />
          <CommandCard
            command="gitpush-continue"
            description="Continue workflow after resolving conflicts"
          />
          <CommandCard
            command="gitpush-abort"
            description="Abort rebase and restore stashed changes"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">gitpush</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              MIT License • Built for developers, by developers
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com/vehutech/gitpush" className="text-gray-400 hover:text-cyan-400 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Documentation
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Issues
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, gradient }: any) {
  return (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all">
      <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" style={{
        backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`
      }}></div>
      
      <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function InstallStep({ number, title, code }: any) {
  return (
    <div className="flex gap-6 items-start">
      <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold mb-2 text-lg">{title}</h3>
        <div className="bg-black/50 border border-gray-700 rounded-lg p-4 font-mono text-sm text-cyan-400 overflow-x-auto">
          {code}
        </div>
      </div>
    </div>
  );
}

function UsageExample({ title, description, code }: any) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="bg-black/50 border border-gray-700 rounded-lg p-4 font-mono text-sm text-cyan-400 whitespace-pre">
        {code}
      </div>
    </div>
  );
}

function CommandCard({ command, args, description }: any) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
      <div className="font-mono text-lg mb-2">
        <span className="text-cyan-400">{command}</span>
        {args && <span className="text-gray-500"> {args}</span>}
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}