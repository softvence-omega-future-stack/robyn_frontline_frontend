import { Linkedin, Calendar, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Section - Brand & Description */}
          <div className="space-y-4">
            <div className="bg-white w-fit px-6 py-3 rounded">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif italic text-slate-900">Frontline</span>
                <svg 
                  className="w-6 h-6" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <span className="text-xs text-slate-600 tracking-wider">FORENSICS</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Independent forensic analysis, expert reports, and courtroom testimony for criminal defense attorneys.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#services" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  href="#case-studies" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="#credentials" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Credentials
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Connect */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-slate-600 rounded hover:bg-slate-800 hover:border-slate-500 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-300" />
              </a>
              <a 
                href="#calendar" 
                className="w-12 h-12 flex items-center justify-center border border-slate-600 rounded hover:bg-slate-800 hover:border-slate-500 transition-all duration-200"
                aria-label="Schedule"
              >
                <Calendar className="w-5 h-5 text-slate-300" />
              </a>
              <a 
                href="mailto:contact@frontlineforensics.com" 
                className="w-12 h-12 flex items-center justify-center border border-slate-600 rounded hover:bg-slate-800 hover:border-slate-500 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal Links */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex justify-center items-center gap-3 text-xs text-slate-400">
            <a 
              href="#privacy" 
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a 
              href="#terms" 
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;