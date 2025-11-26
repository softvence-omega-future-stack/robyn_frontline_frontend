import Wrapper from "@/common/Wrapper";
import profile1 from "@/public/images/profile1.png";
import profile2 from "@/public/images/profile2.png";
import profile3 from "@/public/images/profile3.png";
import Image from "next/image";

type Testimonial = {
    id: number;
    quote: string;
    name: string;
    role: string;
    firm: string;
    avatar: string;
};

const AttorneyFeedback = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            quote:
                "Dr. [Name]'s report changed our strategy and clarified complex science for the jury. The detailed analysis was instrumental in securing a favorable verdict.",
            name: "A. Barrister",
            role: "Defense Attorney",
            firm: "Barrister & Associates",
            avatar: profile1.src,
        },
        {
            id: 2,
            quote:
                "Thorough, objective, and highly credible on the stand. The cross-examination preparation was exceptional and the testimony was clear and persuasive.",
            name: "Public Defender",
            role: "Defense Attorney",
            firm: "Barrister & Associates",
            avatar: profile2.src,
        },
        {
            id: 3,
            quote:
                "The independent DNA reanalysis uncovered critical flaws in the state's evidence. Without this expert review, we would have missed key defense arguments.",
            name: "M. Chen, Esq.",
            role: "Defense Attorney",
            firm: "Barrister & Associates",
            avatar: profile3.src,
        },
    ];

    return (
        <div className="bg-[#21304B] py-12 md:py-20">
            <Wrapper>
                <div className="mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-xl md:text-[32px] font-semibold text-white">
                            Attorney Feedback
                        </h2>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="border border-[#637381] bg-[#1D293D] rounded-lg md:rounded-[14px] p-4 md:p-6 transition-colors duration-200"
                            >
                                {/* Quote */}
                                <p className="text-textBlue text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                                    &quot;{testimonial.quote}&quot;
                                </p>

                                {/* Attribution */}
                                <div className="pt-4 border-t border-[#637381]">
                                    {/* Avatar */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 bg-gray-600">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                width={24}
                                                height={24}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-textBlue text-sm md:text-base font-medium mb-1">
                                            {testimonial.name}
                                        </h3>
                                    </div>

                                    {/* Text Info */}
                                    <div className="flex-1 min-w-0 mt-1">
                                        <p className="text-[#90A1B9] text-xs md:text-sm mb-1">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-[#62748E] text-xs md:text-sm">
                                            {testimonial.firm}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Disclaimer */}
                    <p className="text-center text-textBlue text-base md:text-lg">
                        Testimonials published with permission.
                    </p>
                </div>
            </Wrapper>
        </div>
    );
};

export default AttorneyFeedback;