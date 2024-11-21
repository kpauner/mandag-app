import { create } from "zustand";

interface TasksStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useTasksStore = create<TasksStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
