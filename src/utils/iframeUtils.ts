import { BridgeMode, LayoutMode } from "@/store/bridgeStore";

export interface IframeConfig {
  bridgeMode: BridgeMode;
  layoutMode: LayoutMode;
  disabledFeatures: string[];
  amount?: string;
}

export interface IframeCode {
  url: string;
  width: number;
  height: number;
  htmlCode: string;
}

const dimensions = {
  vertical: { width: 367, height: 740 },
  horizontal: { width: 910, height: 430 },
  normal: { width: 1200, height: 800 },
};

export const constructIframeCode = (config: IframeConfig): IframeCode => {
  const { bridgeMode, layoutMode, disabledFeatures, amount = "1" } = config;

  // Determine dimensions
  const { width, height } =
    bridgeMode === "normal" ? dimensions.normal : dimensions[layoutMode];

  // Construct query parameters
  const queryParams = new URLSearchParams();

  // Add amount parameter
  queryParams.append("amount", amount);

  // Add mode parameter for widget mode
  if (bridgeMode === "widget") {
    queryParams.append("mode", "embed");
  }

  // Add disabled features as separate parameters
  disabledFeatures.forEach((feature) => {
    queryParams.append("disabledFeatures", feature);
  });

  const url = `https://bridge.arbitrum.io/?${queryParams.toString()}`;

  // Generate HTML code
  const htmlCode =
    bridgeMode === "normal"
      ? `<iframe
  src="${url}"
  width="100%"
  height="100%"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>`
      : `<iframe
  src="${url}"
  width="${width}"
  height="${height}"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>`;

  return {
    url,
    width,
    height,
    htmlCode,
  };
};
