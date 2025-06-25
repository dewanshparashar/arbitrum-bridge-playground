import React from "react";
import { Switch } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import {
  ArrowsUpDownIcon,
  ArrowsRightLeftIcon,
  WindowIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import { useBridgeStore } from "@/store/bridgeStore";

const Controls: React.FC = () => {
  const {
    bridgeMode,
    layoutMode,
    disabledFeatures,
    setBridgeMode,
    setLayoutMode,
    toggleFeature,
  } = useBridgeStore();

  return (
    <div className="space-y-4 lg:space-y-5">
      {/* Bridge Mode and Layout Mode - Side by side on small screens */}
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
        {/* Bridge Mode Selector */}
        <div>
          <RadioGroup value={bridgeMode} onChange={setBridgeMode}>
            <RadioGroup.Label className="block text-[13px] font-medium text-[#E5E5E5] mb-2">
              Bridge Mode
            </RadioGroup.Label>
            <p className="text-[10px] lg:text-[11px] text-[#A6A6A6] mb-3 hidden lg:block">
              {bridgeMode === "normal"
                ? "Normal: Full interface with all features enabled"
                : "Widget: Customizable interface embeddable anywhere"}
            </p>
            <div className="flex gap-1 lg:gap-3">
              <RadioGroup.Option value="normal" className="flex-1">
                {({ checked }) => (
                  <div
                    className={`flex flex-col items-center gap-1 lg:gap-2 px-1 lg:px-3 py-1.5 lg:py-2.5 rounded-[6px] border transition-all cursor-pointer ${
                      checked
                        ? "border-[#0D99FF] bg-[#0D99FF]/10 text-[#0D99FF]"
                        : "border-[#3C3C3C] hover:border-[#4C4C4C] text-[#E5E5E5] hover:text-[#FFFFFF]"
                    }`}
                  >
                    <WindowIcon className="w-3 h-3 lg:w-5 lg:h-5" />
                    <span className="text-[10px] lg:text-[13px]">Normal</span>
                  </div>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="widget" className="flex-1">
                {({ checked }) => (
                  <div
                    className={`flex flex-col items-center gap-1 lg:gap-2 px-1 lg:px-3 py-1.5 lg:py-2.5 rounded-[6px] border transition-all cursor-pointer ${
                      checked
                        ? "border-[#0D99FF] bg-[#0D99FF]/10 text-[#0D99FF]"
                        : "border-[#3C3C3C] hover:border-[#4C4C4C] text-[#E5E5E5] hover:text-[#FFFFFF]"
                    }`}
                  >
                    <Square2StackIcon className="w-3 h-3 lg:w-5 lg:h-5" />
                    <span className="text-[10px] lg:text-[13px]">Widget</span>
                  </div>
                )}
              </RadioGroup.Option>
            </div>
          </RadioGroup>
        </div>

        {/* Layout Mode Selector - Only show for Widget mode */}
        {bridgeMode === "widget" && (
          <div>
            <RadioGroup value={layoutMode} onChange={setLayoutMode}>
              <RadioGroup.Label className="block text-[13px] font-medium text-[#E5E5E5] mb-2">
                Layout Mode
              </RadioGroup.Label>
              <div className="flex gap-1 lg:gap-3">
                <RadioGroup.Option value="vertical" className="flex-1">
                  {({ checked }) => (
                    <div
                      className={`flex flex-col items-center gap-1 lg:gap-2 px-1 lg:px-3 py-1.5 lg:py-2.5 rounded-[6px] border transition-all cursor-pointer ${
                        checked
                          ? "border-[#0D99FF] bg-[#0D99FF]/10 text-[#0D99FF]"
                          : "border-[#3C3C3C] hover:border-[#4C4C4C] text-[#E5E5E5] hover:text-[#FFFFFF]"
                      }`}
                    >
                      <ArrowsUpDownIcon className="w-3 h-3 lg:w-5 lg:h-5" />
                      <span className="text-[10px] lg:text-[13px]">
                        Vertical
                      </span>
                    </div>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="horizontal" className="flex-1">
                  {({ checked }) => (
                    <div
                      className={`flex flex-col items-center gap-1 lg:gap-2 px-1 lg:px-3 py-1.5 lg:py-2.5 rounded-[6px] border transition-all cursor-pointer ${
                        checked
                          ? "border-[#0D99FF] bg-[#0D99FF]/10 text-[#0D99FF]"
                          : "border-[#3C3C3C] hover:border-[#4C4C4C] text-[#E5E5E5] hover:text-[#FFFFFF]"
                      }`}
                    >
                      <ArrowsRightLeftIcon className="w-3 h-3 lg:w-5 lg:h-5" />
                      <span className="text-[10px] lg:text-[13px]">
                        Horizontal
                      </span>
                    </div>
                  )}
                </RadioGroup.Option>
              </div>
            </RadioGroup>
          </div>
        )}
      </div>

      {/* Feature Toggles - Only show for Widget mode */}
      {bridgeMode === "widget" && (
        <div className="space-y-3">
          <h3 className="text-[13px] font-medium text-[#E5E5E5]">
            Feature Flags
          </h3>

          {/* Switch Networks Toggle */}
          <div className="flex items-center justify-between p-3 bg-[#363636] rounded-[6px]">
            <div className="flex-1 mr-3">
              <h4 className="text-[13px] font-medium text-[#E5E5E5]">
                Network Selection
              </h4>
              <p className="text-[12px] text-[#A6A6A6] max-w-[280px]">
                We recommend disabling this in embed-mode to prevent users from
                selecting networks that are not in the interest of the host.
              </p>
            </div>
            <Switch
              checked={!disabledFeatures.includes("network-selection")}
              onChange={() => toggleFeature("network-selection")}
              className={`${
                !disabledFeatures.includes("network-selection")
                  ? "bg-[#0D99FF]"
                  : "bg-[#2A2D2E]"
              } relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D99FF] focus:ring-offset-2 focus:ring-offset-[#2C2C2C] flex-shrink-0`}
            >
              <span
                className={`${
                  !disabledFeatures.includes("network-selection")
                    ? "translate-x-4"
                    : "translate-x-1"
                } inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>

          {/* Batch Transfers Toggle */}
          <div className="flex items-center justify-between p-3 bg-[#363636] rounded-[6px]">
            <div className="flex-1 mr-3">
              <h4 className="text-[13px] font-medium text-[#E5E5E5]">
                Batch Transfers
              </h4>
              <p className="text-[12px] text-[#A6A6A6] max-w-[280px]">
                We recommend disabling this in embed-mode due to limited support
                and to keep things simple.
              </p>
            </div>
            <Switch
              checked={!disabledFeatures.includes("batch-transfers")}
              onChange={() => toggleFeature("batch-transfers")}
              className={`${
                !disabledFeatures.includes("batch-transfers")
                  ? "bg-[#0D99FF]"
                  : "bg-[#2A2D2E]"
              } relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D99FF] focus:ring-offset-2 focus:ring-offset-[#2C2C2C] flex-shrink-0`}
            >
              <span
                className={`${
                  !disabledFeatures.includes("batch-transfers")
                    ? "translate-x-4"
                    : "translate-x-1"
                } inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
};

export default Controls;
