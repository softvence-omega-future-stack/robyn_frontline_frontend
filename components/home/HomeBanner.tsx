"use client";

import Wrapper from "@/common/Wrapper";
import Image from "next/image";
import img from "@/public/images/bannerHero.png";
import check from "@/public/chck.svg";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const HomeBanner = () => {
  return (
    <div
    id="home"
      className="relative text-white scroll-mt-20"
      style={{
        background: `
        linear-gradient(
          45deg,
          rgba(0, 0, 0, 0) 25%,
          rgba(255, 255, 255, 0.05) 25%,
          rgba(255, 255, 255, 0.05) 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 75%,
          rgba(255, 255, 255, 0.05) 75%,
          rgba(255, 255, 255, 0.05) 100%
        ),
        linear-gradient(to bottom right, #0f172a, #1e3a8a)
      `,
        backgroundBlendMode: "overlay",
        color: "white",
      }}
    >
      <Wrapper>
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 md:py-0 md:pt-10">

            {/* Left Content */}
            <div className="text-center md:text-left w-full md:w-1/2">
              <div className="inline-block rounded-full px-4 py-2 text-baseBg border border-textGray bg-gray-700/50 text-sm md:text-base mb-4">
                Expert Forensic Analysis
              </div>

              <h1 className="text-textBlue mb-4 md:mb-8">
                <span className="text-sm md:text-sm block">Frontline Forensics</span>
                <p className="text-sm md:text-base">Expert Evidence Analysis for Criminal Defense</p>
              </h1>

              <div className="mb-8 md:mb-10">
                <p className="text-base md:text-lg text-white mb-3 md:mb-5 max-w-lg">
                  Independent technical review, expert reports, and courtroom testimony to strengthen your defense.
                </p>
                <p className="text-sm md:text-base text-[#919EAB]">
                  Second set of eyes on DNA, ballistics, toxicology, and digital evidence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                  <Link href="/contact">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-sm md:text-base font-medium flex items-center gap-2 w-full">
                      Request Case Review <ArrowRight className="w-4 h-4 text-white" />
                    </Button>
                  </Link>

                <Button className="border border-gray-600 bg-gray-700/50 text-[#E2E8F0] text-sm md:text-base flex items-center gap-2">
                  <Download /> Download CV
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full max-w-xs md:max-w-md mx-auto">
                <Image
                  src={img}
                  alt="Law Enforcement Professional"
                  className="object-cover w-full h-[788px]"
                />
              </div>

              {/* Floating Card - FIXED */}
              <div className="
                hidden md:flex 
                items-center gap-4 
                absolute bottom-20 right-[-174px] 
                px-6 py-6 rounded-[14px]
                border border-textGray 
                bg-[rgba(28,36,55,0.90)]
                shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)]
              ">

                {/* Icon */}
                <div className="flex items-center justify-center rounded-full bg-[rgba(225,113,0,0.20)] w-10 h-10">
                  <Image src={check} alt="Check" className="w-4 h-4" />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <p className="text-sm md:text-base text-textBlue font-medium">Court Qualified Expert</p>
                  <span className="text-xs text-[#90A1B9]">
                    State & Federal Courts
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HomeBanner;
