"use client";

import ArbitrumBridge from "@/components/ArbitrumBridge";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="h-screen flex">
      <Sidebar />
      <div className="flex-1 h-full flex items-center justify-center bg-[#333333]">
        <ArbitrumBridge />
      </div>
    </main>
  );
}
