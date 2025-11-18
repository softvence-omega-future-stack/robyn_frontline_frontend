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
    const cards : Card[] = [
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
        <div className="min-h-screen py-16 md:py-20 bg-[#F4F6F8]">
            <Wrapper>
                <div className="mx-auto">
                    {/* Header */}
                    <h1 className="text-xl md:text-[32px] font-semibold text-center mb-8 md:mb-10 text-gray-900">
                        Credentials & Court Qualifications
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Profile */}
                        <div>
                            <div className="bg-white border border-textBlue rounded-xl p-8 space-y-6">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                                        <Image src={profile} alt="profile" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h2 className="text-base md:text-lg text-gray-900">Robyn Bartholomew</h2>
                                        <p className="text-baseBg text-sm md:text-base">Forensic Consultant</p>
                                    </div>
                                </div>

                                <div className="space-y-6 text-[#314158] text-sm md:text-base">
                                    <p>
                                        Ph.D. in Forensic Science from [University]. Over [X] years reviewing criminal evidence and providing expert testimony in state and federal courts.
                                    </p>
                                    <p>
                                        Specializing in technical evidence analysis, I provide independent, objective review to support criminal defense strategies with scientifically sound, court-ready reports.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-6">
                                {[
                                    "Court Qualified Expert",
                                    "ISO/ASCLD Familiar",
                                    "Published Author",
                                    "Attorney References Available",
                                ].map((item, i) => (
                                    <span
                                        key={i}
                                        className="border border-[rgba(225,113,0,0.30)] bg-[rgba(225,113,0,0.10)] px-4 py-2 text-baseBg rounded-full text-xs md:text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Credentials */}
                        <div className="space-y-4">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-gray-200 
                                    transition-all duration-300 hover:bg-orange-100 hover:border-gray-300 
                                    hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon Box */}
                                        <div className="bg-orange-500 rounded-xl p-3 shrink-0 transition-all">
                                            <card.icon className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-600">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Footer Banner */}
                    <div className="mt-12 bg-gray-900 rounded-2xl p-6 text-center">
                        <p className="text-gray-300 text-sm leading-relaxed">
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
