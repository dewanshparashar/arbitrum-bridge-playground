"use client";

import { useState } from "react";
import ArbitrumBridge from "@/components/ArbitrumBridge";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [selectedMode, setSelectedMode] = useState<"vertical" | "horizontal">(
    "vertical"
  );
  const [bridgeMode, setBridgeMode] = useState<"normal" | "widget">("widget");
  const [disabledFeatures, setDisabledFeatures] = useState<string[]>([]);

  const toggleFeature = (feature: string) => {
    setDisabledFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <main className="h-screen flex">
      <Sidebar
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
        bridgeMode={bridgeMode}
        setBridgeMode={setBridgeMode}
        disabledFeatures={disabledFeatures}
        toggleFeature={toggleFeature}
      />

      <div className="flex-1 h-full flex items-center justify-center bg-gray-900">
        <ArbitrumBridge
          mode={selectedMode}
          bridgeMode={bridgeMode}
          disabledFeatures={disabledFeatures}
        />
      </div>
    </main>
  );
}
