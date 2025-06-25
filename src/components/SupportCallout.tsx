import React from "react";

const SupportCallout: React.FC = () => {
  return (
    <div className="w-full p-2 bg-[#0D99FF]/10 border border-[#0D99FF]/20 rounded-[4px]">
      <p className="text-[10px] lg:text-[11px] text-[#E5E5E5] leading-relaxed">
        For additional questions, support, or feature requests, please reach out
        to{" "}
        <a
          href="mailto:partnerships@offchainlabs.com"
          className="text-[#0D99FF] hover:text-[#0D99FF]/80 underline"
        >
          partnerships@offchainlabs.com
        </a>
      </p>
    </div>
  );
};

export default SupportCallout;
