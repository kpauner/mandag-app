import { create } from "zustand";
import { persist } from "zustand/middleware";

type TimeRange = {
  startHour: number;
  endHour: number;
};

type TimeslotsStore = {
  timeRange: TimeRange;
  hideEmptySlots: boolean;
  setTimeRange: (range: TimeRange) => void;
  setHideEmptySlots: (hide: boolean) => void;
};

export const useTimeslotsStore = create<TimeslotsStore>()(
  persist(
    (set) => ({
      timeRange: {
        startHour: 6,
        endHour: 23,
      },
      hideEmptySlots: false, // Default value
      setTimeRange: (range) => set({ timeRange: range }),
      setHideEmptySlots: (hide) => set({ hideEmptySlots: hide }), // New action
    }),
    {
      name: "timeslots-storage",
    }
  )
);
