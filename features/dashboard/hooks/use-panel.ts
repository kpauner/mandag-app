import { create } from "zustand";

type PanelStore = {
  isExpanded: boolean;
  togglePanel: () => void;
};

export const usePanel = create<PanelStore>((set) => ({
  isExpanded: true,
  togglePanel: () => set((state) => ({ isExpanded: !state.isExpanded })),
}));
