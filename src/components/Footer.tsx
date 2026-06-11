import { Cpu, Mail, MapPin } from "lucide-react";

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05070d] border-t border-white/5 pt-12 sm:pt-20 pb-8 sm:pb-10 w-full overflow-x-hidden">
      {/* Background glow - Properly contained */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-emerald-500/5 filter blur-2xl sm:blur-3xl pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-tight text-white">
                Zohrif<span className="text-emerald-500">.</span>Tech
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Zohrif Technology helps businesses build intelligent digital products through cutting-edge AI integrations, professional software development, and modern automation solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300"
                aria-label="Twitter/X"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "Home", href: "#" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Process", href: "#process" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Services
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                "AI & Agentic AI",
                "Web Development",
                "Mobile Apps",
                "SaaS Development",
                "Automation",
              ].map((name) => (
                <li key={name}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
              Get In Touch
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:hello@zohrif.com" className="hover:text-white transition-colors break-all">
                  hello@zohrif.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Pakistan (Worldwide)</span>
              </li>
            </ul>

            {/* Status */}
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs font-medium text-slate-400">Availability</span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-emerald-400 whitespace-nowrap">Open</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {currentYear} Zohrif Technology. All Rights Reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
