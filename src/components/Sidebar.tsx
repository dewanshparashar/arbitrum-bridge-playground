import Controls from "./Controls";
import CodeDisplay from "./CodeDisplay";

interface SidebarProps {
  selectedMode: "vertical" | "horizontal";
  setSelectedMode: (mode: "vertical" | "horizontal") => void;
  bridgeMode: "normal" | "widget";
  setBridgeMode: (mode: "normal" | "widget") => void;
  disabledFeatures: string[];
  toggleFeature: (feature: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedMode,
  setSelectedMode,
  bridgeMode,
  setBridgeMode,
  disabledFeatures,
  toggleFeature,
}) => {
  return (
    <div className="relative inset-y-0 left-0 w-96 bg-gray-800 shadow-xl">
      <div className="flex h-full flex-col overflow-y-auto">
        <div className="px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-semibold text-gray-200">
              Bridge Configuration
            </h2>
          </div>
        </div>
        <div className="relative flex-1 px-4 sm:px-6">
          <Controls
            selectedMode={selectedMode}
            setSelectedMode={setSelectedMode}
            bridgeMode={bridgeMode}
            setBridgeMode={setBridgeMode}
            disabledFeatures={disabledFeatures}
            toggleFeature={toggleFeature}
          />
        </div>
        <div className="px-4 py-6 sm:px-6 border-t border-gray-700">
          <CodeDisplay
            mode={selectedMode}
            bridgeMode={bridgeMode}
            disabledFeatures={disabledFeatures}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
