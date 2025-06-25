import React, { useEffect } from "react";
import { useBridgeStore } from "@/store/bridgeStore";
import { constructIframeCode } from "@/utils/iframeUtils";

const ArbitrumBridge: React.FC = () => {
  const { bridgeMode, layoutMode, disabledFeatures, isLoading, setLoading } =
    useBridgeStore();

  const iframeData = constructIframeCode({
    bridgeMode,
    layoutMode,
    disabledFeatures,
  });

  const handleIframeLoad = () => {
    setLoading(false);
  };

  // Timeout fallback to clear loading state
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [isLoading, setLoading]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="rounded-lg overflow-hidden shadow-lg relative max-w-full">
        {isLoading && (
          <div className="absolute inset-0 bg-[#333333] bg-opacity-90 flex items-center justify-center z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0D99FF]"></div>
            </div>
          </div>
        )}
        <iframe
          src={iframeData.url}
          width={iframeData.width}
          height={iframeData.height}
          className="border-0 max-w-full"
          allow="clipboard-write"
          allowFullScreen
          onLoad={handleIframeLoad}
        />
      </div>
    </div>
  );
};

export default ArbitrumBridge;
