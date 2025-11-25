'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Wrapper from '@/common/Wrapper';

type FaqItem = {
    question: string;
    answer: string;
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FaqItem[] = [
        {
            question: "Do you work directly with defendants?",
            answer:
                "No — I only accept retainers from licensed attorneys for criminal matters. All engagement is through counsel to maintain attorney work product protection and confidentiality."
        },
        {
            question: "Can you reanalyze DNA from a lab sample?",
            answer:
                "Yes. If the underlying testing data is available (such as raw electropherograms, laboratory notes, or digital files), I can reanalyze and independently interpret the results."
        },
        {
            question: "Will you testify in court?",
            answer:
                "Yes. I provide trial testimony, hearing testimony, and expert statements when needed, typically after completing a full review and consultation with counsel."
        },
        {
            question: "How long does a review take?",
            answer:
                "Most case reviews take 3–14 days depending on case complexity and the amount of documentation provided. Rush service may be available if deadlines are urgent."
        },
        {
            question: "What materials do you need to begin?",
            answer:
                "Typically, I need laboratory reports, case files, bench notes, electropherogram data (if available), correspondence, and any materials relevant to the DNA evidence. Additional items may be requested depending on the case."
        },
        {
            question: "Do you provide opinions favorable to the defense?",
            answer:
                "I provide objective and scientifically accurate opinions — whether they help or hurt the defense. My role is to provide expert interpretation based on the evidence, not to advocate for one side."
        },
        {
            question: "Are consultations confidential?",
            answer:
                "Yes. All consulting is conducted under attorney work product protection to ensure confidentiality and privilege. None of the information is released to outside parties without counsel’s direction."
        },
        {
            question: "What are your fees?",
            answer:
                "Fees vary depending on the scope and urgency of the case. Standard options include hourly consulting, flat-rate case review, and separate rates for expert testimony. A written estimate is provided before work begins."
        }
    ];


    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-16 md:py-20">
            <Wrapper>
                <div className="md:w-2/3 mx-auto">
                    <h1 className="text-xl md:text-[32px] font-semibold text-black text-center mb-6 md:mb-10">
                        Frequently Asked Questions
                    </h1>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-[10px] border border-textBlue overflow-hidden transition-all duration-200 ${openIndex === index ? 'bg-[#FCF1E6]' : 'bg-[#F9FAFB]'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-150"
                                >
                                    <span className="text-[#0F172B] text-sm font-medium pr-8">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 hover:bg-gray-100 text-gray-600 shrink-0 transition-transform duration-200 cursor-pointer ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {openIndex === index && faq.answer && (
                                    <div className="px-6 pb-4 pt-0">
                                        <p className="text-textGray text-sm">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Faq;