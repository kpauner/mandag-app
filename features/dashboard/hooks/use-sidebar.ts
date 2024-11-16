import { create } from "zustand";

type SidebarStore = {
  isExpanded: boolean;
  toggleSidebar: () => void;
};

export const useSidebar = create<SidebarStore>((set) => ({
  isExpanded: true,
  toggleSidebar: () => set((state) => ({ isExpanded: !state.isExpanded })),
}));
