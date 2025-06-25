import React, { useState } from "react";
import { useBridgeStore } from "@/store/bridgeStore";
import { constructIframeCode } from "@/utils/iframeUtils";
import { CheckIcon } from "@heroicons/react/24/outline";

const CodeDisplay: React.FC = () => {
  const { bridgeMode, layoutMode, disabledFeatures } = useBridgeStore();
  const [copied, setCopied] = useState(false);

  const iframeData = constructIframeCode({
    bridgeMode,
    layoutMode,
    disabledFeatures,
  });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(iframeData.htmlCode);
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
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
          disabled={copied}
          className={`px-2.5 py-1.5 font-medium rounded-[4px] transition-all duration-200 flex items-center gap-1.5 ${
            copied
              ? "bg-green-600 text-white cursor-default"
              : "bg-[#0D99FF] hover:bg-[#0D99FF]/90 text-white hover:scale-105"
          }`}
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <span>Copy</span>
          )}
        </button>
      </div>
      <pre className="bg-black/80 p-3 rounded-[4px] overflow-x-auto">
        <code className="text-[#E5E5E5] font-mono">{iframeData.htmlCode}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
