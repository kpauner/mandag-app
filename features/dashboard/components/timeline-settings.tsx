import { Switch } from "@/components/ui/switch";
import { useTimeslotsStore } from "../hooks/use-timeslots-store";
import { NumberInput } from "@/components/number-input";

export function TimelineSettings() {
  const { timeRange, setTimeRange, hideEmptySlots, setHideEmptySlots } =
    useTimeslotsStore();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center gap-4">
        <div className="space-y-2">
          <label htmlFor="startHour">Start Hour</label>
          <NumberInput
            max={23}
            value={timeRange.startHour}
            onChange={(value) =>
              setTimeRange({ ...timeRange, startHour: value })
            }
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="endHour">End Hour</label>
          <NumberInput
            max={23}
            value={timeRange.endHour}
            onChange={(value) => setTimeRange({ ...timeRange, endHour: value })}
          />
        </div>
      </div>
      <div className="space-y-2 flex items-center gap-2 justify-between">
        <label htmlFor="hideEmptySlots">Hide Empty Slots</label>
        <Switch checked={hideEmptySlots} onCheckedChange={setHideEmptySlots} />
      </div>
    </div>
  );
}
