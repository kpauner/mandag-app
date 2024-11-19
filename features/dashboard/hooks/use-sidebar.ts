import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarStore = {
  isExpanded: boolean;
  toggleSidebar: () => void;
};

export const useSidebar = create<SidebarStore>()(
  persist(
    (set) => ({
      isExpanded: true,
      toggleSidebar: () => set((state) => ({ isExpanded: !state.isExpanded })),
    }),
    {
      name: "sidebar-storage",
    }
  )
);
