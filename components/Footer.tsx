import { Linkedin, Calendar, Mail } from 'lucide-react';
import img from "@/public/images/footerLogo.png";
import Image from 'next/image';
import Wrapper from '@/common/Wrapper';

const Footer = () => {

  return (
    <footer className="bg-[#0F172B] text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <Wrapper>
        <div className="w-full mx-auto">

          {/* Main Footer */}
          <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-12">

            {/* LEFT (full on mobile, half on desktop) */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="relative w-[130px] h-[45px] md:w-40 md:h-[60px]">
                <Image src={img} alt="Footer Logo" fill className="object-contain" />
              </div>

              <p className="text-sm leading-relaxed max-w-md text-[#90A1B9]">
                Independent forensic analysis, expert reports, and courtroom testimony for criminal defense attorneys.
              </p>
            </div>

            {/* RIGHT SIDE — quick links + connect */}
            <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between gap-10">

              {/* Quick Links */}
              <div className="space-y-4 w-full md:w-auto">
                <h3 className="text-white font-medium text-base">Quick Links</h3>
                <ul className="space-y-3 text-[#90A1B9]">
                  <li><a href="#services" className="text-sm hover:text-white transition hover:underline">Services</a></li>
                  <li><a href="#process" className="text-sm hover:text-white transition hover:underline">Process</a></li>
                  <li><a href="#cases" className="text-sm hover:text-white transition hover:underline">Case Studies</a></li>
                  <li><a href="#about" className="text-sm hover:text-white transition hover:underline">Credentials</a></li>
                </ul>
              </div>

              {/* Connect */}
              <div className="space-y-4 w-full md:w-auto">
                <h3 className="text-white font-medium text-base">Connect</h3>

                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center bg-[#1D293D] justify-center  hover:bg-baseBg transition"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>

                  <a
                    href="#calendar"
                    className="w-10 h-10 rounded-full flex items-center bg-[#1D293D] justify-center  hover:bg-baseBg transition"
                  >
                    <Calendar className="w-5 h-5 text-white" />
                  </a>

                  <a
                    href="mailto:contact@frontlineforensics.com"
                    className="w-10 h-10 rounded-full flex items-center bg-[#1D293D] justify-center  hover:bg-baseBg transition"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs md:text-sm text-[#90A1B9]">
              <a href="#privacy" className="hover:text-white hover:underline transition">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-white hover:underline transition">Terms & Conditions</a>
            </div>
          </div>

        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
