"use client";

import { Button } from "@cspaglu/ui/components/ui/button";
import { Input } from "@cspaglu/ui/components/ui/input";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@cspaglu/ui/components/ui/form";
import { ArrowRight } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactHookForm } from "@cspaglu/ui/lib/index";
import { earlyAccessSchemaType } from "@cspaglu/common/def";
import { EarlyAccessSchema } from "@cspaglu/common/types";
import { formattedDate } from "utils";

export default function JoinWaitList() {
  const form = ReactHookForm.useForm<earlyAccessSchemaType>({
    resolver: zodResolver(EarlyAccessSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    formState: { isLoading },
  } = form;

  async function onSubmit(values: earlyAccessSchemaType) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/api/v1/early-access/join-waitlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Successfully joined the waitlist!", {
        description: `Joined at, ${formattedDate}`,
      });
      form.reset();
    } catch (error) {
      console.error("Failed to join waitlist:", error);
      toast.error("Failed to join waitlist");
    }
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0 py-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    type="email"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto flex items-center justify-center"
          >
            {isLoading ? (
              <span> Joining.... </span>
            ) : (
              <span>Join Waitlist</span>
            )}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
