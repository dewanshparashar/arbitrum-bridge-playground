import React from "react";
import { useBridgeStore } from "@/store/bridgeStore";
import { constructIframeCode } from "@/utils/iframeUtils";

const CodeDisplay: React.FC = () => {
  const { bridgeMode, layoutMode, disabledFeatures } = useBridgeStore();

  const iframeData = constructIframeCode({
    bridgeMode,
    layoutMode,
    disabledFeatures,
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iframeData.htmlCode);
  };

  // Only render in widget mode
  if (bridgeMode !== "widget") {
    return null;
  }

  return (
    <div className="w-full bg-[#363636] rounded-[6px] p-3 text-xs">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-[13px] font-medium text-[#E5E5E5]">Embed Code</h3>
        <button
          onClick={copyToClipboard}
          className="px-2.5 py-1.5 bg-[#0D99FF] hover:bg-[#0D99FF]/90 font-medium text-white rounded-[4px] transition-colors"
        >
          Copy
        </button>
      </div>
      <pre className="bg-black/80 p-3 rounded-[4px] overflow-x-auto">
        <code className="text-[#E5E5E5] font-mono">{iframeData.htmlCode}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
