'use client';

import {
    FileText,
    Microscope,
    FileSearch,
    MessageSquare,
    LucideIcon,
    ShieldCheck,
} from "lucide-react";
import Wrapper from "@/common/Wrapper";

interface StepItem {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    deliverable: string;
    number: string;
}

const Objective = () => {

    const steps: StepItem[] = [
        {
            id: 1,
            icon: FileText,
            title: "Initial Case Intake",
            description: "Confirm scope, materials needed, and chain-of-custody.",
            deliverable: "Intake summary & evidence checklist",
            number: "01",
        },
        {
            id: 2,
            icon: ShieldCheck,
            title: "Evidence Collection & Verification",
            description:
                "Secure/verify submitted items, request additional discovery (lab notes, photos).",
            deliverable: "Evidence verification log",
            number: "02",
        },
        {
            id: 3,
            icon: Microscope,
            title: "Technical Re-analysis",
            description:
                "Independent reanalysis using accepted methods and blind review where appropriate.",
            deliverable: "Technical appendix",
            number: "03",
        },
        {
            id: 4,
            icon: FileSearch,
            title: "Interpretation & Expert Report",
            description:
                "Plain-language explanation of findings, methods, limitations, and rebuttals to opposing opinions.",
            deliverable: "Draft expert report (editable)",
            number: "04",
        },
        {
            id: 5,
            icon: MessageSquare,
            title: "Testimony Preparation & Court Presence",
            description:
                "Deposition prep, mock cross, and courtroom testimony if retained.",
            deliverable: "Testimony packet & exhibits",
            number: "05",
        },
    ];

    return (
        <div className="bg-[#21304B] py-16 md:py-20" id="cases">
            <Wrapper>
                <div className=" mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-white text-sm md:text-lg mb-2">
                            My Method
                        </p>
                        <h1 className="text-white text-2xl md:text-3xl font-semibold">
                            Objective, Reproducible, Court-Ready
                        </h1>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        <div
                            className="absolute hidden sm:block left-8 top-0 bottom-32 w-0.5 bg-textBlue"

                        />

                        <div className="space-y-8 md:space-y-12">
                            {steps.map((step) => {
                                const Icon = step.icon;

                                return (
                                    <div key={step.id} className="relative flex items-start gap-10 md:gap-14 group">

                                        {/* Icon */}
                                        <div className="hidden sm:block">
                                            <div
                                                className="
                      relative w-16 h-16 rounded-full flex items-center justify-center 
                      bg-textBlue shadow-lg transition-all duration-300
                      group-hover:bg-baseBg
                    "
                                            >
                                                <Icon
                                                    size={32}
                                                    className="
                        text-baseBg transition-all duration-300
                        group-hover:text-white
                      "
                                                />
                                            </div>
                                        </div>

                                        {/* Card */}
                                        <div
                                            className="
                      flex-1 rounded-xl p-6 shadow-md bg-textBlue 
                      transition-all duration-300 
                      group-hover:bg-white group-hover:shadow-xl
                    "
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <h3
                                                    className=" text-base md:text-lg font-medium text-black transition-colors duration-300"
                                                >
                                                    {step.title}
                                                </h3>

                                                <span
                                                    className="
                          text-2xl md:text-4xl text-orange-500 transition-colors duration-300
                        "
                                                >
                                                    {step.number}
                                                </span>
                                            </div>

                                            <p
                                                className="
                        text-sm md:text-base mb-4 text-gray-700 transition-colors duration-300
                      "
                                            >
                                                {step.description}
                                            </p>

                                            {/* Deliverable Box */}
                                            <div
                                                className="rounded-lg p-3 bg-[#FCF1E6] transition-all duration-300 group-hover:bg-[#FBEAD9] border border-[#C4CDD5] group-hover:border group-hover:border-gray-500 "
                                            >
                                                <p
                                                    className="text-sm text-textGray transition-colors duration-300"
                                                >
                                                    <span className="text-sm md:text-base text-baseBg">Deliverable:</span>{" "}
                                                    {step.deliverable}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Objective;
