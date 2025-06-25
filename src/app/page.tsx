"use client";

import ArbitrumBridge from "@/components/ArbitrumBridge";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 min-h-[50vh] lg:h-screen flex items-center justify-center bg-[#333333] p-4 lg:p-0">
        <ArbitrumBridge />
      </div>
    </main>
  );
}
