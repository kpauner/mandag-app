import { create } from "zustand";
import pb from "@/lib/pocketbase";
import type { RecordModel } from "pocketbase";

interface AuthStore {
  user: RecordModel | null;
  isLoading: boolean;
  setUser: (user: RecordModel | null) => void;
  initialize: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  initialize: async () => {
    try {
      if (pb.authStore.isValid) {
        const user = await pb
          .collection("users")
          .getOne(pb.authStore.model?.id);
        set({ user, isLoading: false });
      } else {
        set({ user: null, isLoading: false });
      }
    } catch {
      set({ user: null, isLoading: false });
    }
  },
  logout: () => {
    pb.authStore.clear();
    set({ user: null });
  },
}));
