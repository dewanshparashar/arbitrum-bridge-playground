import React from "react";
import { useBridgeStore } from "@/store/bridgeStore";

const ArbitrumBridge: React.FC = () => {
  const { bridgeMode, layoutMode, disabledFeatures } = useBridgeStore();

  const dimensions = {
    vertical: { width: 367, height: 740 },
    horizontal: { width: 910, height: 430 },
    normal: { width: 1200, height: 800 },
  };

  const { width, height } =
    bridgeMode === "normal" ? dimensions.normal : dimensions[layoutMode];

  const queryParams = new URLSearchParams({
    amount: "1",
    ...(bridgeMode === "widget" && { mode: "embed" }),
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
