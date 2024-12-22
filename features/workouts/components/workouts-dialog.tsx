"use client";

import { Workout, WorkoutFormValues } from "../types/workouts";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icons from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import VisuallyHide from "@/components/ui/visually-hide";
import { DateTimePicker } from "@/components/date-time-picker";
import { NumberInput } from "@/components/number-input";
import { SelectTags } from "@/components/select-tags";
import { BadgeCloud } from "@/components/badge-cloud";
import { WorkoutEvent } from "@/components/ui/event";
import pb from "@/lib/pocketbase";
import { ResponsiveImage } from "@/components/responsive-image";

type WorkoutsDialogProps = {
  data?: Workout;
};

export function WorkoutsDialog({ data }: WorkoutsDialogProps) {
  const [isEditing, setIsEditing] = useState(false);

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
        <WorkoutEvent
          startAt={data?.startAt}
          duration={data?.duration}
          reps={data?.reps}
          sets={data?.sets}
          title={data?.title || ""}
          icon={<Icons.workout className="size-5" />}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-row items-center justify-between pb-0 m-0">
          <div className="flex gap-2 items-center">
            <VisuallyHide>
              <DialogTitle>{data?.title}</DialogTitle>
            </VisuallyHide>
            <Switch
              id="edit-mode"
              checked={isEditing}
              onCheckedChange={setIsEditing}
            />
            <Label htmlFor="edit-mode">Edit</Label>
          </div>
          <DialogClose asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-6 !m-0 !p-0"
            >
              <Icons.close className="w-4 h-4" />
            </Button>
          </DialogClose>
        </DialogHeader>
        {isEditing ? (
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
                      <Input placeholder="shadcn" {...field} />
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
                      <Textarea placeholder="shadcn" {...field} />
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
        ) : (
          <div className="space-y-4">
            <h5 className="text-2xl font-medium">{data?.title}</h5>
            {data?.image && (
              <ResponsiveImage
                src={pb.files.getUrl(data, data?.image)}
                alt={data?.title || ""}
              />
            )}

            {data?.description && <p className="pb-2">{data.description}</p>}
            <BadgeCloud
              other={[
                ...(data?.reps ? [`${data.reps} reps`] : []),
                ...(data?.sets ? [`${data.sets} sets`] : []),
              ]}
              startAt={data?.startAt}
              duration={data?.duration}
              recurring={data?.recurring}
              collectionName={<Icons.workout className="size-4" />}
              className="bg-chart-2 text-chart-2-foreground"
            />
          </div>
        )}

        {isEditing && (
          <DialogFooter className="pt-4">
            <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>
              Save changes
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
