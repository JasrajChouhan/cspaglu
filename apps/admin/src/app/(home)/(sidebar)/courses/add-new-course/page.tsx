"use client";

import { CreateCourseSchema } from "@cspaglu/common/types";
import { CreateCourseSchemaType } from "@cspaglu/common/def";
// import {formattedDate } from '@cspaglu/common/utils/index';

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactHookForm } from "@cspaglu/ui/lib/index";

import { Button } from "@cspaglu/ui/components/ui/button";
import { Textarea } from "@cspaglu/ui/components/ui/textarea";
import { FormInput } from "components/ui/form-input";
import { Form } from "@cspaglu/ui/components/ui/form";
import { CreateCourse } from "actions";
import { toast } from "sonner";

export default function CreateNewCourse() {
  const { useForm } = ReactHookForm;
  const form = useForm<CreateCourseSchemaType>({
    resolver: zodResolver(CreateCourseSchema),
  });

  async function onSubmit(values: CreateCourseSchemaType) {
    console.log(values);
    try {
      const data = await CreateCourse(values);
      console.log(data);
      toast.success("Successfully created the course!", {
        // description: `Create at, ${formattedDate}`,
      });
      form.reset();
    } catch (error) {
      console.error("Failed to join waitlist:", error);
      toast.error("Something went wrong, please try again letter", {
        // description : `Failed at, ${formattedDate}`
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormInput
          control={form.control}
          name="title"
          label="Course Title"
          placeholder="Introduction to SQL"
          description="This is your first step to creating a course."
          required
        />
        <FormInput
          control={form.control}
          name="slug"
          label="Course Slug"
          placeholder="introduction-to-sql"
          description="This slug will be used in the course URL."
          required
        />
        <FormInput
          control={form.control}
          name="description"
          label="Course Description"
          placeholder="Briefly describe your course"
          description="Optional, but helps learners understand the course."
          render={(field) => (
            <Textarea
              {...field}
              placeholder="Briefly describe your course"
              className="min-h-[120px]"
            />
          )}
        />
        <FormInput
          control={form.control}
          name="thumbnailUrl"
          label="Thumbnail URL"
          placeholder="https://example.com/thumbnail.jpg"
          description="URL to a thumbnail image (optional)."
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
