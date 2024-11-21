"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const displayFormSchema = z.object({
  show_slots: z.boolean().default(false).optional(),
});

type DisplayFormValues = z.infer<typeof displayFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<DisplayFormValues> = {
  show_slots: false,
};

export default function DisplayForm() {
  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues,
  });

  function onSubmit(data: DisplayFormValues) {
    toast.success(`Settings saved: ${JSON.stringify(data)}`);
  }

  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle>Display Settings</CardTitle>
        <CardDescription>
          Configure how events are displayed in the dashboard.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="show_slots"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Show all time slots
                    </FormLabel>
                    <FormDescription>
                      Show time slots in the dashboard, even if they contain no
                      events.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="border-t-2 border-border px-6 py-4">
            <Button variant="default">Save</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
