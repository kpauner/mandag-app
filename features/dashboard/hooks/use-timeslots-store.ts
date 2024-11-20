import { create } from "zustand";
import { persist } from "zustand/middleware";

type TimeRange = {
  startHour: number;
  endHour: number;
};

type TimeslotsStore = {
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
};

export const useTimeslotsStore = create<TimeslotsStore>()(
  persist(
    (set) => ({
      timeRange: {
        startHour: 6,
        endHour: 23,
      },
      setTimeRange: (range) => set({ timeRange: range }),
    }),
    {
      name: "timeslots-storage",
    }
  )
);
