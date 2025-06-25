import Controls from "./Controls";
import IntegrationGuide from "./IntegrationGuide";
import SupportCallout from "./SupportCallout";

const Sidebar: React.FC = () => {
  return (
    <div className="w-full lg:w-96 bg-[#2C2C2C] border-b lg:border-b-0 lg:border-r border-[#3C3C3C] h-screen overflow-y-auto flex-col flex gap-8 p-4">
      <div className="flex items-start justify-between">
        <h2 className="text-[15px] font-medium text-[#E5E5E5]">
          Arbitrum Bridge Playground
        </h2>
      </div>

      <Controls />

      <IntegrationGuide />

      <SupportCallout />
    </div>
  );
};

export default Sidebar;
