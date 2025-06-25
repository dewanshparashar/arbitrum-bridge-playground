import React from "react";
import { useBridgeStore } from "@/store/bridgeStore";
import { constructIframeCode } from "@/utils/iframeUtils";

const ArbitrumBridge: React.FC = () => {
  const { bridgeMode, layoutMode, disabledFeatures } = useBridgeStore();

  const iframeData = constructIframeCode({
    bridgeMode,
    layoutMode,
    disabledFeatures,
  });

  return (
    <div className="h-full flex items-center justify-center">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={iframeData.url}
          width={iframeData.width}
          height={iframeData.height}
          className="border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ArbitrumBridge;
