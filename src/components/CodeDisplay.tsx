import React from "react";

interface CodeDisplayProps {
  mode: "vertical" | "horizontal";
  bridgeMode: "normal" | "widget";
  disabledFeatures: string[];
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({
  mode,
  bridgeMode,
  disabledFeatures,
}) => {
  const dimensions = {
    vertical: { width: 367, height: 740 },
    horizontal: { width: 910, height: 430 },
  };

  const { width, height } = dimensions[mode];

  const queryParams = new URLSearchParams({
    ...(bridgeMode === "widget" && { embedMode: "1" }),
    ...(disabledFeatures.length > 0 && {
      disabledFeatures: disabledFeatures.join(","),
    }),
  });

  const iframeUrl = `https://bridge.arbitrum.io/?${queryParams.toString()}`;

  const codeString =
    bridgeMode === "normal"
      ? `<iframe
  src="${iframeUrl}"
  width="100%"
  height="100%"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>`
      : `<iframe
  src="${iframeUrl}"
  width="${width}"
  height="${height}"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
  };

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
        <code className="text-[#E5E5E5] font-mono">{codeString}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
