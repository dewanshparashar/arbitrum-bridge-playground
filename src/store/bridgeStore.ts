import { create } from "zustand";

export type BridgeMode = "normal" | "widget";
export type LayoutMode = "vertical" | "horizontal";

interface BridgeState {
  // Bridge configuration
  bridgeMode: BridgeMode;
  layoutMode: LayoutMode;
  disabledFeatures: string[];
  isLoading: boolean;

  // Actions
  setBridgeMode: (mode: BridgeMode) => void;
  setLayoutMode: (mode: LayoutMode) => void;
  toggleFeature: (feature: string) => void;
  setLoading: (loading: boolean) => void;
  resetState: () => void;
}

const initialState = {
  bridgeMode: "widget" as BridgeMode,
  layoutMode: "vertical" as LayoutMode,
  disabledFeatures: [] as string[],
  isLoading: false,
};

export const useBridgeStore = create<BridgeState>((set) => ({
  ...initialState,

  setBridgeMode: (mode: BridgeMode) => {
    set({ bridgeMode: mode, isLoading: true });
  },

  setLayoutMode: (mode: LayoutMode) => {
    set({ layoutMode: mode, isLoading: true });
  },

  toggleFeature: (feature: string) => {
    set((state) => ({
      disabledFeatures: state.disabledFeatures.includes(feature)
        ? state.disabledFeatures.filter((f) => f !== feature)
        : [...state.disabledFeatures, feature],
      isLoading: true,
    }));
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },

  resetState: () => {
    set(initialState);
  },
}));
