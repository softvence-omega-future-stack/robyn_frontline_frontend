import Wrapper from '@/common/Wrapper';
import { GraduationCap, Award, Scale, FileText, Users, LucideIcon } from 'lucide-react';
import profile from "@/public/images/profile.png";
import Image from 'next/image';

type Card = {
    icon: LucideIcon;
    title: string;
    desc: string;
};

const Credentials = () => {
    const cards: Card[] = [
        {
            icon: GraduationCap,
            title: "Ph.D. in Forensic Science",
            desc: "Advanced degree from accredited university",
        },
        {
            icon: Award,
            title: "Board Certified",
            desc: "Certified in multiple forensic disciplines",
        },
        {
            icon: Scale,
            title: "Court Admissions",
            desc: "Qualified in state and federal courts",
        },
        {
            icon: FileText,
            title: "Published Author",
            desc: "Peer-reviewed articles and research",
        },
        {
            icon: Users,
            title: "Professional Memberships",
            desc: "American Academy of Forensic Sciences",
        },
    ];

    return (
        <div className="py-12 md:py-20 bg-[#F4F6F8]" id='about'>
            <Wrapper>
                <div className="mx-auto">
                    {/* Header */}
                    <h1 className="text-2xl md:text-[32px] font-semibold text-center mb-6 md:mb-10 text-gray-900 px-4">
                        Credentials & Court Qualifications
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {/* Left Column */}
                        <div>
                            <div className="bg-white border border-textBlue rounded-xl p-6 md:p-8 space-y-6">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
                                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200">
                                        <Image 
                                            src={profile} 
                                            alt="Robyn Bartholomew - Forensic Consultant" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h2 className="text-lg md:text-xl font-medium text-gray-900">Robyn Bartholomew</h2>
                                        <p className="text-baseBg text-sm md:text-base mt-1">Forensic Consultant</p>
                                    </div>
                                </div>

                                <div className="space-y-4 text-[#314158] text-sm md:text-base leading-relaxed">
                                    <p>
                                        Ph.D. in Forensic Science from [University]. Over [X] years reviewing criminal evidence and providing expert testimony in state and federal courts.
                                    </p>
                                    <p>
                                        Specializing in technical evidence analysis, I provide independent, objective review to support criminal defense strategies with scientifically sound, court-ready reports.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 md:gap-3 mt-6 justify-center sm:justify-start">
                                {[
                                    "Court Qualified Expert",
                                    "ISO/ASCLD Familiar",
                                    "Published Author",
                                    "Attorney References Available",
                                ].map((item, i) => (
                                    <span
                                        key={i}
                                        className="border border-[rgba(225,113,0,0.30)] bg-[rgba(225,113,0,0.10)] px-3 py-2 text-baseBg rounded-full text-xs md:text-sm whitespace-nowrap"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-4 md:p-6 border border-gray-200 
                                transition-all duration-300 cursor-pointer
                                hover:bg-[#E171001A] hover:border-gray-300 hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-3 md:gap-4">
                                        {/* Icon Box */}
                                        <div
                                            className="rounded-[10px] p-2 md:p-3 shrink-0 bg-[#E171001A]
                                        transition-all duration-300
                                        group-hover:bg-baseBg"
                                        >
                                            <card.icon
                                                className="w-5 h-5 md:w-6 md:h-6 text-baseBg transition-all duration-300 
                                            group-hover:text-white"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm md:text-base font-medium text-black mb-1 leading-tight">
                                                {card.title}
                                            </h3>
                                            <p className="text-xs md:text-base text-textGray leading-relaxed">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Footer Banner */}
                            <div className="mt-6 bg-gray-900 rounded-2xl p-4 md:p-6 text-left">
                                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                    Credentials and prior testimony details will be provided on request. Client confidentiality is maintained for all matters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Credentials;