"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { WorkoutFormValues } from "../types/workouts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SelectTags } from "@/components/select-tags";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/date-time-picker";
import { NumberInput } from "@/components/number-input";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CreateWorkoutDialogProps {
  open: boolean;
  onOpenChangeAction: (open: boolean) => void; // renamed prop
}

export default function CreateWorkoutDialog({
  open,
  onOpenChangeAction,
}: CreateWorkoutDialogProps) {
  const form = useForm<WorkoutFormValues>({
    defaultValues: {
      title: "",
      description: "",
      startAt: undefined,
      duration: 30,
      recurring: undefined,
    },
  });

  const handleSubmit = (data: WorkoutFormValues) => {
    console.log(data);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChangeAction}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Create workout</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Weekly team meeting" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="sr-only">Beskrivelse</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Discuss project updates and upcoming deadlines with the team"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startAt"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2 space-y-0 justify-between">
                  <FormLabel>Start at</FormLabel>
                  <FormControl>
                    <DateTimePicker
                      value={field.value}
                      onChange={(date) => field.onChange(date)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2 space-y-0 justify-between">
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <NumberInput
                      value={field.value}
                      onChange={field.onChange}
                      min={5}
                      max={480}
                      step={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recurring"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center gap-4 space-y-0 justify-between sm:flex-row">
                  <FormLabel>Recurring</FormLabel>
                  <SelectTags value={field.value} onChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter className="pt-4">
          <DialogClose asChild>
            <Button variant="neutral">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
