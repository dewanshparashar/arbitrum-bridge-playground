import React from "react";
import { Switch } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import {
  ArrowsUpDownIcon,
  ArrowsRightLeftIcon,
  WindowIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";

interface ControlsProps {
  selectedMode: "vertical" | "horizontal";
  setSelectedMode: (mode: "vertical" | "horizontal") => void;
  bridgeMode: "normal" | "widget";
  setBridgeMode: (mode: "normal" | "widget") => void;
  disabledFeatures: string[];
  toggleFeature: (feature: string) => void;
}

const Controls: React.FC<ControlsProps> = ({
  selectedMode,
  setSelectedMode,
  bridgeMode,
  setBridgeMode,
  disabledFeatures,
  toggleFeature,
}) => {
  return (
    <div className="space-y-5">
      {/* Bridge Mode Selector */}
      <div>
        <RadioGroup value={bridgeMode} onChange={setBridgeMode}>
          <RadioGroup.Label className="block text-[13px] font-medium text-[#E5E5E5] mb-2">
            Bridge Mode
          </RadioGroup.Label>
          <p className="text-[11px] text-[#A6A6A6] mb-3">
            {bridgeMode === "normal"
              ? "Normal: Full interface with all features enabled"
              : "Widget: Customizable interface embeddable in any app"}
          </p>
          <div className="flex gap-3">
            <RadioGroup.Option value="normal" className="flex-1">
              {({ checked }) => (
                <div
                  className={`flex flex-col items-center gap-2 px-3 py-2.5 rounded-[6px] border transition-all cursor-pointer ${
                    checked
                      ? "border-[#0D99FF] bg-[#0D99FF]/10 text-[#0D99FF]"
                      : "border-[#3C3C3C] hover:border-[#4C4C4C] text-[#E5E5E5] hover:text-[#FFFFFF]"
                  }`}
                >
                  <WindowIcon className="w-5 h-5" />
                  <span className="text-[13px]">Normal</span>
                </div>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="widget" className="flex-1">
              {({ checked }) => (
                <div
                  className={`flex flex-col items-center gap-2 px-3 py-2.5 rounded-[6px] border transition-all cursor-pointer ${
                    checked
                      ? "border-[#0D99FF] bg-[#0D99FF]/10 text-[#0D99FF]"
                      : "border-[#3C3C3C] hover:border-[#4C4C4C] text-[#E5E5E5] hover:text-[#FFFFFF]"
                  }`}
                >
                  <Square2StackIcon className="w-5 h-5" />
                  <span className="text-[13px]">Widget</span>
                </div>
              )}
            </RadioGroup.Option>
          </div>
        </RadioGroup>
      </div>

      {/* Layout Mode Selector - Only show for Widget mode */}
      {bridgeMode === "widget" && (
        <div>
          <RadioGroup value={selectedMode} onChange={setSelectedMode}>
            <RadioGroup.Label className="block text-[13px] font-medium text-[#E5E5E5] mb-2">
              Layout Mode
            </RadioGroup.Label>
            <div className="flex gap-3">
              <RadioGroup.Option value="vertical" className="flex-1">
                {({ checked }) => (
                  <div
                    className={`flex flex-col items-center gap-2 px-3 py-2.5 rounded-[6px] border transition-all cursor-pointer ${
                      checked
                        ? "border-[#0D99FF] bg-[#0D99FF]/10 text-[#0D99FF]"
                        : "border-[#3C3C3C] hover:border-[#4C4C4C] text-[#E5E5E5] hover:text-[#FFFFFF]"
                    }`}
                  >
                    <ArrowsUpDownIcon className="w-5 h-5" />
                    <span className="text-[13px]">Vertical</span>
                  </div>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="horizontal" className="flex-1">
                {({ checked }) => (
                  <div
                    className={`flex flex-col items-center gap-2 px-3 py-2.5 rounded-[6px] border transition-all cursor-pointer ${
                      checked
                        ? "border-[#0D99FF] bg-[#0D99FF]/10 text-[#0D99FF]"
                        : "border-[#3C3C3C] hover:border-[#4C4C4C] text-[#E5E5E5] hover:text-[#FFFFFF]"
                    }`}
                  >
                    <ArrowsRightLeftIcon className="w-5 h-5" />
                    <span className="text-[13px]">Horizontal</span>
                  </div>
                )}
              </RadioGroup.Option>
            </div>
          </RadioGroup>
        </div>
      )}

      {/* Feature Toggles - Only show for Widget mode */}
      {bridgeMode === "widget" && (
        <div className="space-y-3">
          <h3 className="text-[13px] font-medium text-[#E5E5E5]">
            Feature Flags
          </h3>

          {/* Batch Transfers Toggle */}
          <div className="flex items-center justify-between p-3 bg-[#363636] rounded-[6px]">
            <div>
              <h4 className="text-[13px] font-medium text-[#E5E5E5]">
                Batch Transfers
              </h4>
              <p className="text-[12px] text-[#A6A6A6] max-w-[280px]">
                Users will be able to batch ETH/native tokens alongside bridged
                tokens. Limited to only a few chains. We recommend this to be
                disabled for embed mode to keep things simple.
              </p>
            </div>
            <Switch
              checked={!disabledFeatures.includes("batch-transfers")}
              onChange={() => toggleFeature("batch-transfers")}
              className={`${
                !disabledFeatures.includes("batch-transfers")
                  ? "bg-[#0D99FF]"
                  : "bg-[#2A2D2E]"
              } relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D99FF] focus:ring-offset-2 focus:ring-offset-[#2C2C2C]`}
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

          {/* Switch Networks Toggle */}
          <div className="flex items-center justify-between p-3 bg-[#363636] rounded-[6px]">
            <div>
              <h4 className="text-[13px] font-medium text-[#E5E5E5]">
                Network Selection
              </h4>
              <p className="text-[12px] text-[#A6A6A6] max-w-[280px]">
                Users will be able to select any source and destination network
                they want to bridge assets between. We recommend disabling this
                for embed mode to prevent users from selecting networks that are
                not in the interest of the host.
              </p>
            </div>
            <Switch
              checked={!disabledFeatures.includes("network-selection")}
              onChange={() => toggleFeature("network-selection")}
              className={`${
                !disabledFeatures.includes("network-selection")
                  ? "bg-[#0D99FF]"
                  : "bg-[#2A2D2E]"
              } relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D99FF] focus:ring-offset-2 focus:ring-offset-[#2C2C2C]`}
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
        </div>
      )}
    </div>
  );
};

export default Controls;
