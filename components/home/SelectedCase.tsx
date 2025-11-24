import React from 'react';
import { FileDown, Info } from 'lucide-react';
import Wrapper from '@/common/Wrapper';

const SelectedCase = () => {
    const cases = [
        {
            id: 1,
            title: "DNA Reanalysis in Homicide Case",
            problem: "Lab reported a DNA match, but chain-of-custody documentation had significant gaps and time delays.",
            whatIDid: "Reanalyzed raw amplification data, identified potential amplification artifact; requested complete lab protocols and validation studies; reinterpreted statistical match significance.",
            outcome: "Expert report filed highlighting chain-of-custody concerns and artifact explanation; opposing expert amended opinion; case disposition favorable.",
            deliverables: "Technical appendix, expert report, rebuttal memo",
            featured: false
        },
        {
            id: 2,
            title: "Ballistics Trajectory Reconstruction",
            problem: "Prosecution ballistics expert testified to a single shooter trajectory inconsistent with defendant's position.",
            whatIDid: "Conducted independent trajectory analysis using crime scene photos, autopsy reports, and physical evidence; performed 3D reconstruction modeling.",
            outcome: "Alternative trajectory scenarios presented; reasonable doubt established regarding shooter position.",
            deliverables: "Trajectory analysis report, visual exhibits, testimony preparation materials",
            featured: true
        },
        {
            id: 3,
            title: "Toxicology Report Interpretation",
            problem: "Lab toxicology report indicated presence of controlled substance but did not account for metabolic timing or pharmacokinetics.",
            whatIDid: "Reviewed complete lab analytical methods; calculated pharmacokinetic timelines; consulted peer-reviewed literature on metabolite half-lives and detection windows.",
            outcome: "Expert affidavit filed demonstrating timing inconsistencies; charges related to impairment dropped.",
            deliverables: "Pharmacokinetic analysis, literature review, expert affidavit",
            featured: false
        }
    ];

    return (
        <div className="bg-white py-12 md:py-20">
            <Wrapper>
                <div className="mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 md:mb-12 px-4 md:px-0">
                        <h1 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-black mb-2 md:mb-4">
                            Selected Case Summaries
                        </h1>
                        <p className="text-sm md:text-base text-textGray">
                            (Anonymized for Client Confidentiality)
                        </p>
                    </div>

                    {/* Case Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                        {cases.map((caseItem) => (
                            <div
                                key={caseItem.id}
                                className="bg-white rounded-[14px] border border-textBlue hover:shadow-md transition-shadow duration-200 flex flex-col"
                            >
                                {/* Card Content */}
                                <div className="p-4 md:p-6 flex-1">
                                    {/* Anonymized Badge */}
                                    <div className="mb-3 md:mb-4">
                                        <span className="inline-block bg-[#E171001A] text-[#BB4D00] text-xs md:text-sm px-3 py-1 rounded-full">
                                            Anonymized
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-base md:text-lg lg:text-xl font-medium text-black mb-3 md:mb-6 lg:mb-8 leading-tight">
                                        {caseItem.title}
                                    </h2>

                                    {/* Problem Section */}
                                    <div className="mb-3 md:mb-4">
                                        <h3 className="font-medium text-[#212B36] mb-1 text-sm md:text-base">Problem:</h3>
                                        <p className="text-textGray text-xs md:text-sm leading-relaxed">
                                            {caseItem.problem}
                                        </p>
                                    </div>

                                    {/* What I Did Section */}
                                    <div className="mb-3 md:mb-4">
                                        <h3 className="font-medium text-[#212B36] mb-1 text-sm md:text-base">What I Did:</h3>
                                        <p className="text-textGray text-xs md:text-sm leading-relaxed">
                                            {caseItem.whatIDid}
                                        </p>
                                    </div>

                                    {/* Outcome Section */}
                                    <div className="mb-3 md:mb-4">
                                        <h3 className="font-medium text-[#212B36] mb-1 text-sm md:text-base">Outcome:</h3>
                                        <p className="text-textGray text-xs md:text-sm leading-relaxed">
                                            {caseItem.outcome}
                                        </p>
                                    </div>

                                    {/* Deliverables Section */}
                                    <div className="bg-gray-50 rounded-[10px] p-3 mt-4 md:mt-6">
                                        <h3 className="font-medium text-black mb-1 text-sm md:text-base">Deliverables:</h3>
                                        <p className="text-textGray text-xs md:text-sm leading-relaxed">
                                            {caseItem.deliverables}
                                        </p>
                                    </div>
                                </div>

                                {/* Download Button */}
                                <div className="p-4 md:p-6 pt-0 mt-auto">
                                    <button
                                        className={`w-full flex items-center cursor-pointer justify-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg text-xs md:text-sm transition-colors duration-200 border ${caseItem.featured
                                            ? 'bg-baseBg text-white hover:bg-orange-700 border-baseBg'
                                            : 'bg-white text-[#314158] border-baseBg hover:bg-gray-50'
                                            }`}
                                    >
                                        <FileDown size={16} className="md:w-[18px] md:h-[18px]" />
                                        Download Redacted Report
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Notice */}
                    <div className="bg-[#FFFBEB] border border-[#919EAB] rounded-[14px] p-4 md:p-6 flex items-start gap-3">
                        <Info className="text-baseBg shrink-0 mt-0.5 w-5 h-5" />
                        <p className="text-[#314158] text-sm md:text-base leading-relaxed">
                            All case details are anonymized to preserve client confidentiality. Specifics can be discussed under protective order or NDA.
                        </p>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default SelectedCase;