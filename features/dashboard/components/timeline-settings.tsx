import { Input } from "@/components/ui/input";
import { useTimeslotsStore } from "../hooks/use-timeslots-store";

export function TimelineSettings() {
  const { timeRange, setTimeRange } = useTimeslotsStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="space-y-2">
          <label htmlFor="startHour">Start Hour</label>
          <Input
            type="number"
            id="startHour"
            min={0}
            max={23}
            value={timeRange.startHour}
            onChange={(e) =>
              setTimeRange({
                ...timeRange,
                startHour: parseInt(e.target.value),
              })
            }
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="endHour">End Hour</label>
          <Input
            type="number"
            id="endHour"
            min={0}
            max={23}
            value={timeRange.endHour}
            onChange={(e) =>
              setTimeRange({
                ...timeRange,
                endHour: parseInt(e.target.value),
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
