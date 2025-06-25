import Controls from "./Controls";
import IntegrationGuide from "./IntegrationGuide";

const Sidebar: React.FC = () => {
  return (
    <div className="w-full lg:w-96 bg-[#2C2C2C] border-b lg:border-b-0 lg:border-r border-[#3C3C3C]">
      <div className="flex flex-col overflow-y-auto">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 className="text-[15px] font-medium text-[#E5E5E5]">
              Arbitrum Bridge Playground
            </h2>
          </div>
        </div>
        <div className="relative flex-1 px-4 sm:px-6">
          <Controls />
        </div>
        <div className="px-4 py-5 sm:px-6 border-t border-[#3C3C3C]">
          <IntegrationGuide />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
