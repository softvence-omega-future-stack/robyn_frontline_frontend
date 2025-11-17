"use client";
import { Service } from "./Services";
import {Lightbulb, Dna, Target, HardDrive, MapPin, Beaker, ClipboardCheck } from "lucide-react";
import Wrapper from "@/common/Wrapper";

const Areas = () => {
    const services: Service[] = [
        {
            id: 1,
            icon: <Dna className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "DNA / Biological Evidence",
            description:"Reanalysis, match statistics, laboratory protocol review",
        },
        {
            id: 2,
            icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Ballistics & Firearms",
            description:"Trajectory reconstruction, toolmark comparison",
        },
        {
            id: 3,
            icon: <Beaker className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Toxicology",
            description:"Interpretation of lab reports, pharmacokinetics",
        },
        {
            id: 4,
            icon: <HardDrive className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Digital Forensics",
            description:"Device imaging, metadata analysis, chain-of-custody",
        },
        {
            id: 5,
            icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Crime Scene & Evidence Handling",
            description:"Identifying collection/packaging errors",
        },
        {
            id: 6,
            icon: <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Lab Methods & QA/QC",
            description:"Audit of laboratory procedures and validation",
        },
    ];


    return (
        <div className="py-12 md:py-16 lg:py-20">
            <Wrapper>
                {/* Heading */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12">
                    Areas of Technical Expertise
                </h1>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="
                                group bg-white rounded-xl p-4 sm:p-5 md:p-6 border border-textBlue
                                transition-all duration-200 hover:bg-[#F9FAFB]
                            "
                        >
                            {/* Flex Row: Icon + Content */}
                            <div className="flex items-start gap-4">

                                {/* Icon Box */}
                                <div
                                    className="
                                        shrink-0 inline-flex items-center justify-center 
                                        w-10 h-10 md:w-12 md:h-12 rounded-[10px]
                                        bg-orange-100 text-baseBg transition-all duration-300
                                        group-hover:bg-baseBg group-hover:text-white
                                    "
                                >
                                    {service.icon}
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className="text-sm sm:text-base md:text-base font-medium mb-2 text-gray-900">
                                        {service.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm md:text-sm text-textGray leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Deliverable Box */}
                <div className="rounded-xl p-6 bg-[#FFFBEB] border border-[#C4CDD5]">
                    <p className="text-sm md:text-base text-[#314158] text-center">
                        If a discipline listed here is central to your case, please include lab reports, chain-of-custody, and any prior expert reports with your intake.
                    </p>
                </div>
            
            </Wrapper>
        </div>
    );
};

export default Areas;
