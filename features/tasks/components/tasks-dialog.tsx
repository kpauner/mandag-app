"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Task, TaskFormValues } from "../types/tasks";
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
import { useState } from "react";
import VisuallyHide from "@/components/ui/visually-hide";
import { DateTimePicker } from "@/components/date-time-picker";
import { NumberInput } from "@/components/number-input";
import { SelectTags } from "@/components/select-tags";
import { BadgeCloud } from "@/components/badge-cloud";
import { format } from "date-fns";

type TasksDialogProps = {
  data?: Task;
};

export function TasksDialog({ data }: TasksDialogProps) {
  const [isEditing, setIsEditing] = useState(false);
  const form = useForm<TaskFormValues>({
    defaultValues: {
      title: data?.title || "",
      description: data?.description || "",
      startAt: data?.startAt ? data.startAt : undefined,
      duration: data?.duration || 30,
      recurring: data?.recurring || undefined,
    },
  });

  const handleSubmit = (data: TaskFormValues) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full px-4 py-8 bg-chart-1 border-2 border-border h-16 rounded-lg flex items-center justify-between cursor-pointer">
          <div className="flex flex-col ml-2">
            <span className="text-lg font-medium tracking-wide leading-none">
              {data?.title}
            </span>
            <span className="text-sm font-bold flex flex-row gap-2">
              <span>
                {data?.startAt ? format(data.startAt, "HH:mm") : "All day"}
              </span>
              /<span>{data?.duration} min</span>
            </span>
          </div>

          <Icons.task className="w-6 h-6" />
        </div>
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
          <div className="space-y-2">
            <div>
              <h3 className="text-2xl font-medium">{data?.title}</h3>
            </div>
            {data?.description && (
              <div>
                <p className="pb-2">{data.description}</p>
              </div>
            )}
            <BadgeCloud
              startAt={data?.startAt}
              duration={data?.duration}
              collectionName={<Icons.task className="w-4 h-4" />}
              recurring={data?.recurring}
              className="bg-chart-1"
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
