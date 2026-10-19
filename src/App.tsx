import { portfolioData } from './data/portfolio';
import { 
  Mail, 
  ArrowUpRight, 
  Terminal, 
  CheckCircle2, 
  ShieldCheck, 
  Code2, 
  Database, 
  Cpu,
  FolderGit2,
  FileCode2,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const { personal, metrics, projects, skills } = portfolioData;

  return (
    <div className="min-h-screen bg-[#120914] text-gray-100 px-4 py-8 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Header / Hero */}
      <header className="border-b border-[#3b153e] pb-12 pt-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-teal-400 font-mono text-sm">
            <Terminal size={18} />
            <span>johanlopez.dev</span>
          </div>
          <div className="flex gap-4">
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noreferrer" 
              title="GitHub Profile"
              className="p-2 bg-[#221027] rounded-lg hover:bg-[#32173a] border border-[#3b153e] text-gray-300 hover:text-white transition flex items-center justify-center"
            >
              <FolderGit2 size={18} />
            </a>
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              title="LinkedIn Profile"
              className="p-2 bg-[#221027] rounded-lg hover:bg-[#32173a] border border-[#3b153e] text-gray-300 hover:text-white transition flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
          {personal.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-teal-400 font-medium mb-4">
          {personal.role}
        </h2>
        <p className="text-gray-300 max-w-2xl text-lg mb-8 leading-relaxed">
          {personal.tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href={`mailto:${personal.email}`} 
            className="flex items-center gap-2 bg-[#78184a] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#8d1d58] transition"
          >
            <Mail size={18} /> Direct Contact
          </a>
        <a 
          href="/CV - Johan Jael Lopez Reyes" 
          target="_blank"
          rel="noreferrer"
          download="Johan_Lopez_CV.pdf"
          className="flex items-center gap-2 bg-[#221027] border border-[#3b153e] text-gray-200 px-5 py-2.5 rounded-lg hover:bg-[#32173a] transition"
        >
          Download Resume (PDF) <ArrowUpRight size={18} />
        </a>
        </div>
      </header>

      {/* Impact Metrics Bar */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 my-4">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-[#1e0e22] border border-[#3b153e] p-5 rounded-xl">
            <div className="text-2xl font-bold text-teal-400 mb-1">{m.value}</div>
            <div className="text-sm text-gray-300">{m.label}</div>
          </div>
        ))}
      </section>

      {/* Featured Case Studies / Projects */}
      <section className="py-10">
        <div className="flex items-center gap-2 mb-8">
          <ShieldCheck className="text-teal-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Featured Impact & Engineering Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#1a0c1e] border border-[#3b153e] rounded-2xl p-6 md:p-8 hover:border-[#611f66] transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider bg-[#3d122b] border border-[#78184a] px-3 py-1 rounded-full">
                    {project.impact}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
                </div>
                <span className="text-sm text-gray-400 font-mono">{project.role}</span>
              </div>

              <p className="text-gray-300 text-base mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-3">Key Technical Highlights:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documentation & Tool Links */}
              {project.documentationLinks && project.documentationLinks.length > 0 && (
                <div className="mb-6 pt-4 border-t border-[#2e1232]">
                  <h4 className="text-xs uppercase font-semibold text-teal-300 tracking-wider mb-2 flex items-center gap-1.5">
                    <FileCode2 size={14} /> Architecture & Documentation Resources:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.documentationLinks.map((doc, dIdx) => (
                      <a
                        key={dIdx}
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-gray-300 bg-[#2b1230] hover:bg-[#3d1845] border border-[#481e50] hover:border-teal-400 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition"
                      >
                        <span>{doc.label}</span>
                        <ExternalLink size={12} className="text-teal-400" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#3b153e]">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono bg-[#2b1230] text-teal-200 px-3 py-1 rounded-md border border-[#481e50]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className="py-10 border-t border-[#3b153e]">
        <h2 className="text-2xl font-bold text-white mb-8">Technical Proficiency Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1a0c1e] border border-[#3b153e] p-5 rounded-xl">
            <div className="flex items-center gap-2 text-teal-400 font-semibold mb-3">
              <Code2 size={20} /> Frontend
            </div>
            <ul className="text-sm text-gray-300 space-y-1.5 font-mono">
              {skills.frontend.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>

          <div className="bg-[#1a0c1e] border border-[#3b153e] p-5 rounded-xl">
            <div className="flex items-center gap-2 text-teal-400 font-semibold mb-3">
              <Terminal size={20} /> Backend & APIs
            </div>
            <ul className="text-sm text-gray-300 space-y-1.5 font-mono">
              {skills.backend.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>

          <div className="bg-[#1a0c1e] border border-[#3b153e] p-5 rounded-xl">
            <div className="flex items-center gap-2 text-teal-400 font-semibold mb-3">
              <Database size={20} /> Databases & DevOps
            </div>
            <ul className="text-sm text-gray-300 space-y-1.5 font-mono">
              {skills.databasesDevOps.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>

          <div className="bg-[#1a0c1e] border border-[#3b153e] p-5 rounded-xl">
            <div className="flex items-center gap-2 text-teal-400 font-semibold mb-3">
              <Cpu size={20} /> AI & Tooling
            </div>
            <ul className="text-sm text-gray-300 space-y-1.5 font-mono">
              {skills.toolingAI.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-6 border-t border-[#3b153e] text-center text-sm text-gray-500">
        <p>© 2026 Johan Jael López Reyes. Built with React, TypeScript & Tailwind CSS.</p>
      </footer>
    </div>
  );
}