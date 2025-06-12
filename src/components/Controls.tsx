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
    <div className="space-y-6">
      {/* Bridge Mode Selector */}
      <div>
        <RadioGroup value={bridgeMode} onChange={setBridgeMode}>
          <RadioGroup.Label className="block text-sm font-medium text-gray-400 mb-2">
            Bridge Mode
          </RadioGroup.Label>
          <div className="flex gap-4">
            <RadioGroup.Option value="normal" className="flex-1">
              {({ checked }) => (
                <div
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all cursor-pointer ${
                    checked
                      ? "border-blue-500 bg-blue-500/10 text-blue-400"
                      : "border-gray-600 hover:border-gray-500 text-gray-400 hover:text-gray-300"
                  }`}
                >
                  <WindowIcon className="w-6 h-6" />
                  <span className="text-sm">Normal</span>
                </div>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="widget" className="flex-1">
              {({ checked }) => (
                <div
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all cursor-pointer ${
                    checked
                      ? "border-blue-500 bg-blue-500/10 text-blue-400"
                      : "border-gray-600 hover:border-gray-500 text-gray-400 hover:text-gray-300"
                  }`}
                >
                  <Square2StackIcon className="w-6 h-6" />
                  <span className="text-sm">Widget</span>
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
            <RadioGroup.Label className="block text-sm font-medium text-gray-400 mb-2">
              Layout Mode
            </RadioGroup.Label>
            <div className="flex gap-4">
              <RadioGroup.Option value="vertical" className="flex-1">
                {({ checked }) => (
                  <div
                    className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all cursor-pointer ${
                      checked
                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                        : "border-gray-600 hover:border-gray-500 text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    <ArrowsUpDownIcon className="w-6 h-6" />
                    <span className="text-sm">Vertical</span>
                  </div>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="horizontal" className="flex-1">
                {({ checked }) => (
                  <div
                    className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all cursor-pointer ${
                      checked
                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                        : "border-gray-600 hover:border-gray-500 text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    <ArrowsRightLeftIcon className="w-6 h-6" />
                    <span className="text-sm">Horizontal</span>
                  </div>
                )}
              </RadioGroup.Option>
            </div>
          </RadioGroup>
        </div>
      )}

      {/* Feature Toggles */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-400">Feature Flags</h3>

        {/* Batch Transfers Toggle */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div>
            <h4 className="text-gray-200 font-medium">Batch Transfers</h4>
            <p className="text-sm text-gray-400">
              Enable/disable batch transfer functionality
            </p>
          </div>
          <Switch
            checked={!disabledFeatures.includes("batch-transfers")}
            onChange={() => toggleFeature("batch-transfers")}
            className={`${
              !disabledFeatures.includes("batch-transfers")
                ? "bg-green-500"
                : "bg-red-500"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            <span
              className={`${
                !disabledFeatures.includes("batch-transfers")
                  ? "translate-x-6"
                  : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        {/* Switch Networks Toggle */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div>
            <h4 className="text-gray-200 font-medium">Switch Networks</h4>
            <p className="text-sm text-gray-400">
              Enable/disable network switching functionality
            </p>
          </div>
          <Switch
            checked={!disabledFeatures.includes("network-selection")}
            onChange={() => toggleFeature("network-selection")}
            className={`${
              !disabledFeatures.includes("network-selection")
                ? "bg-green-500"
                : "bg-red-500"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            <span
              className={`${
                !disabledFeatures.includes("network-selection")
                  ? "translate-x-6"
                  : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Controls;
