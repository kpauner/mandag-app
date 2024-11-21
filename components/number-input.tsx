import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react"; // or use your Icons component

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export function NumberInput({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  className,
}: NumberInputProps) {
  const increment = () => {
    const newValue = value + step;
    if (max !== undefined && newValue <= max) {
      onChange(newValue);
    }
  };

  const decrement = () => {
    const newValue = value - step;
    if (min !== undefined && newValue >= min) {
      onChange(newValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (isNaN(newValue)) return;

    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      <Button
        type="button"
        variant="noShadow"
        size="icon"
        onClick={decrement}
        disabled={value <= min}
        className="rounded-r-none border-r-0 aspect-square"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        className="rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <Button
        type="button"
        variant="noShadow"
        size="icon"
        onClick={increment}
        disabled={value >= max}
        className="rounded-l-none border-l-0 aspect-square"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
