
"use client";

import React from "react";
import { FileText, Scale, Lightbulb, FileSearchCorner } from "lucide-react";
import Wrapper from "@/common/Wrapper";

export type Service = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Services: React.FC = () => {

  const services: Service[] = [
    {
      id: 1,
      icon: <FileSearchCorner className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Independent Evidence Review",
      description:
        "Re-analysis of scientific evidence to validate or challenge findings.",
    },
    {
      id: 2,
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Expert Reports & Affidavits",
      description:
        "Clear, court-ready written reports that explain technical issues plainly.",
    },
    {
      id: 3,
      icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Court Testimony",
      description:
        "Objective expert witness testimony and cross-examination prep.",
    },
    {
      id: 4,
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Forensic Consulting & Strategy",
      description:
        "Evaluate law enforcement methods and advise on case direction.",
    },
  ];

  return (<div
    id="services"
    className="py-12 md:py-20 scroll-mt-18"
  > <Wrapper>
      {/* Heading */} <h1 className="text-xl md:text-[32px] font-semibold text-center text-gray-900 mb-8 md:mb-12">
        Services I Provide </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="
            group bg-white rounded-lg md:rounded-[14px] p-4 sm:p-5 md:p-6 border border-textBlue
            transition-all duration-200 hover:bg-[#F9FAFB] hover:shadow-md hover:-translate-y-1
          "
          >
            {/* Icon */}
            <div
              className="
              inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-[10px] mb-4 sm:mb-5 md:mb-6
              bg-orange-100 text-orange-500 transition-all duration-300
              group-hover:bg-baseBg group-hover:text-white group-hover:scale-110
            "
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-base md:text-base font-medium mb-2 sm:mb-3 md:mb-3 text-gray-900">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-sm text-textGray leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#212B36] max-w-3xl mx-auto leading-relaxed">
        I work only with attorneys on criminal matters. All reviews are performed objectively and documented in a reproducible manner.
      </p>
    </Wrapper>
  </div>


  );
};

export default Services;