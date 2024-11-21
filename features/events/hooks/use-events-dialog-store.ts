import { create } from "zustand";
import { DialogType } from "../types/events";

type EventsDialogStore = {
  activeOverlay: DialogType | null;
  isOpen: boolean;
  onOpen: (type: DialogType) => void;
  onClose: () => void;
};

export const useEventsDialogStore = create<EventsDialogStore>((set) => ({
  activeOverlay: null,
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, activeOverlay: type }),
  onClose: () => set({ isOpen: false, activeOverlay: null }),
}));
