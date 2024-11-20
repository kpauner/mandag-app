"use client";

import {
  Dialog,
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icons from "@/components/icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

type TasksDialogProps = {
  data?: Task;
};

export function TasksDialog({ data }: TasksDialogProps) {
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
          <div className="flex items-center w-full gap-2">
            <Checkbox onClick={(e) => e.stopPropagation()} />
            <div className="flex flex-col ml-2">
              <span className="text-lg font-bold tracking-wide leading-none">
                {data?.title}
              </span>
              <span className="text-sm text-black/50">
                {data?.duration} min
              </span>
            </div>
          </div>
          <Icons.task className="w-6 h-6" />
        </div>
      </DialogTrigger>
      <DialogContent className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Title</FormLabel>
                  <FormControl>
                    <Input variant="ghost" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Beskrivelse</FormLabel>
                  <FormControl>
                    <Textarea variant="ghost" placeholder="shadcn" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit" size="lg">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
