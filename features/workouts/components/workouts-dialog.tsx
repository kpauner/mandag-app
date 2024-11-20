import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Workout, WorkoutFormValues } from "../types/workouts";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Icons from "@/components/icons";

type WorkoutsDialogProps = {
  data?: Workout;
};

export function WorkoutsDialog({ data }: WorkoutsDialogProps) {
  const form = useForm<WorkoutFormValues>({
    defaultValues: {
      title: data?.title || "",
      description: data?.description || "",
      startAt: data?.startAt ? data.startAt : undefined,
      duration: data?.duration || 30,
      recurring: data?.recurring || undefined,
    },
  });

  const handleSubmit = (data: WorkoutFormValues) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="noShadow"
          className="w-full pr-4 pl-0 py-0 bg-white"
          size="xl"
        >
          <div className="flex items-center justify-between h-full w-full bg-background gap-2">
            <span className="bg-chart-2 h-full aspect-square flex items-center justify-center">
              <Icons.workout className="size-8" />
            </span>
            <span>{data?.title}</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data?.title}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
