import Wrapper from '@/common/Wrapper';
import { Clock, FileText, Scale, LucideIcon } from 'lucide-react';
import check from "@/public/chck.svg";
import Image from 'next/image';

type EngagementOption = {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
};

const HowEngagement = () => {

    const engagementOptions: EngagementOption[] = [
        {
            id: 1,
            icon: Clock,
            title: "Hourly Consultation",
            description: "Initial case review and technical consultation billed by the hour.",
            features: [
                "Case intake and scope definition",
                "Preliminary evidence review",
                "Technical advisory calls",
                "Hourly rate with detailed billing"
            ]
        },
        {
            id: 2,
            icon: FileText,
            title: "Flat-Fee Review",
            description: "Fixed price for document and lab report reanalysis with defined scope.",
            features: [
                "Complete lab report analysis",
                "Evidence documentation review",
                "Written expert summary",
                "Scope defined in intake agreement"
            ]
        },
        {
            id: 3,
            icon: Scale,
            title: "Retainer for Trial/Testimony",
            description: "Retainer plus hourly for comprehensive courtroom services.",
            features: [
                "Trial preparation and exhibits",
                "Deposition and cross-exam prep",
                "Expert witness testimony",
                "Ongoing case consultation"
            ]
        }
    ];

    return (
        <div className="py-16 md:py-20 bg-[#F4F6F8]">
            <Wrapper>
                <div className="mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 md:mb-12 px-4 md:px-0">
                        <h2 className="text-xl md:text-[32px] font-semibold text-black mb-2 md:mb-4">
                            How Engagement Works
                        </h2>
                        <p className="text-textGray text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                            I accept engagements from licensed attorneys on criminal matters only.
                            <br className="hidden sm:block" />
                            Choose the model that best fits your case needs.
                        </p>
                    </div>

                    {/* Engagement Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {engagementOptions.map((option) => {
                            const IconComponent = option.icon;

                            return (
                                <div
                                    key={option.id}
                                    className="bg-[#F9FAFB] border border-textBlue rounded-[14px] p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:border-[#C4CDD5] hover:-translate-y-1 group hover:bg-[#FCF1E6]"
                                >
                                    {/* Icon */}
                                    <div className="mb-4 md:mb-6">
                                        <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-[10px] bg-[#FCF1E6] group-hover:bg-baseBg transition-colors duration-300">
                                            <IconComponent className="text-baseBg group-hover:text-white w-6 h-6 md:w-7 md:h-7 transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base md:text-lg font-medium text-black mb-2 md:mb-3 group-hover:text-gray-800 transition-colors duration-300">
                                        {option.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#212B36] text-sm md:text-base mb-4 md:mb-6 group-hover:text-gray-700 transition-colors duration-300">
                                        {option.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-2 md:space-y-3">
                                        {option.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <Image 
                                                    className='mt-0.5 transition-colors duration-300' 
                                                    src={check} 
                                                    alt="check" 
                                                    width={14} 
                                                    height={14}
                                                />
                                                <span className="text-textGray text-sm md:text-base leading-relaxed flex-1 group-hover:text-gray-600 transition-colors duration-300">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default HowEngagement;