import {
  Dialog,
  DialogContent,
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
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

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
        <Button variant="noShadow" className="w-full px-4" size="xl">
          <div className="flex items-center justify-between w-full bg-background gap-2">
            <PlusIcon className="w-6 h-6" />
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
