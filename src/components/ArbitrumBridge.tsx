import React from "react";

interface ArbitrumBridgeProps {
  mode: "vertical" | "horizontal";
  bridgeMode: "normal" | "widget";
  disabledFeatures?: string[];
}

const ArbitrumBridge: React.FC<ArbitrumBridgeProps> = ({
  mode,
  bridgeMode,
  disabledFeatures = [],
}) => {
  const dimensions = {
    vertical: { width: 367, height: 740 },
    horizontal: { width: 910, height: 430 },
    normal: { width: 1200, height: 800 },
  };

  const { width, height } =
    bridgeMode === "normal" ? dimensions.normal : dimensions[mode];

  const queryParams = new URLSearchParams({
    amount: "1",
    ...(bridgeMode === "widget" && { embedMode: "1" }),
    ...(disabledFeatures.length > 0 && {
      disabledFeatures: disabledFeatures.join(","),
    }),
  });

  const iframeUrl = `https://bridge.arbitrum.io/?${queryParams.toString()}`; // iframe to render

  return (
    <div className="h-full flex items-center justify-center">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={iframeUrl}
          width={width}
          height={height}
          className="border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ArbitrumBridge;
