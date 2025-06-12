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
    <div className="w-full max-w-3xl bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-200">Embed Code</h3>
        <button
          onClick={copyToClipboard}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
        >
          Copy Code
        </button>
      </div>
      <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
        <code className="text-gray-200 text-sm">{codeString}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
