"use client";

import { CreateCourseSchema } from "@cspaglu/common/types";
import { CreateCourseSchemaType } from "@cspaglu/common/def";
import { zodResolver } from "@hookform/resolvers/zod";

import { ReactHookForm } from "@cspaglu/ui/lib/index";
import { Button } from "@cspaglu/ui/components/ui/button";
import { Textarea } from "@cspaglu/ui/components/ui/textarea";
import { FormInput } from "components/ui/form-input";
import { Form } from "@cspaglu/ui/components/ui/form";
import { CreateCourse } from "actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreateNewCourse() {
  const { useForm } = ReactHookForm;

  const form = useForm<CreateCourseSchemaType>({
    resolver: zodResolver(CreateCourseSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      thumbnailUrl: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    control,
  } = form;

  const router = useRouter();

  const onSubmit = async (values: CreateCourseSchemaType) => {
    try {
      const course = await CreateCourse(values);
      toast.success("Course created successfully", {
        description: `Course "${values.title}" has been saved.`,
      });

      reset();
      const redirectTo = `/courses/${course.id}-${course.slug}/edit`;
      router.push(redirectTo);
    } catch (error: any) {
      console.error("Create course error:", error.message.message);
      toast.error("Failed to create course", {
        description:
          JSON.parse(error.message).message ||
          "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormInput
          control={control}
          name="title"
          label="Course Title"
          placeholder="Introduction to SQL"
          description="This is your first step to creating a course."
          required
        />
        <FormInput
          control={control}
          name="slug"
          label="Course Slug"
          placeholder="introduction-to-sql"
          description="This slug will be used in the course URL."
          required
        />
        <FormInput
          control={control}
          name="description"
          label="Course Description"
          placeholder="Briefly describe your course"
          description="Minimum 30 characters, maximum 300 characters."
          required
          render={(field) => (
            <Textarea
              {...field}
              placeholder="Briefly describe your course"
              className="min-h-[120px]"
            />
          )}
        />
        <FormInput
          control={control}
          name="thumbnailUrl"
          label="Thumbnail URL"
          placeholder="https://example.com/thumbnail.jpg"
          description="URL to a thumbnail image (optional)."
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
