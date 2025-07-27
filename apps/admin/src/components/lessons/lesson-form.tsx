"use client";

import { Input } from "@cspaglu/ui/components/ui/input";
import { Button } from "@cspaglu/ui/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import dynamic from "next/dynamic";
// import { UpdateLesson } from "actions";
import { ReactHookForm } from "@cspaglu/ui/lib/index";
import { UpdateLesson } from "actions/lesson";

// Dynamically import MDXEditor
const MDXEditor = dynamic(
  () => import("@mdxeditor/editor").then((mod) => mod.MDXEditor),
  {
    ssr: false,
    loading: () => <p>Loading Editor...</p>,
  },
);

export default function LessonForm({
  lesson,
  setEditMode,
  courseId,
}: {
  lesson: any;
  setEditMode: (v: boolean) => void;
  courseId: string;
}) {
  const { register, handleSubmit, watch, setValue } = ReactHookForm.useForm({
    defaultValues: {
      title: lesson.title,
      description: lesson.description,
    },
  });

  const [isSaving, setIsSaving] = useState(false);
  const values = watch();

  const hasChanged =
    values?.title !== lesson?.title ||
    values?.description !== lesson?.description;

  async function onSubmit(data: any) {
    setIsSaving(true);
    try {
      await UpdateLesson(courseId, lesson.id, data);
      toast.success("Lesson updated");
      setEditMode(false);
    } catch (err: any) {
      toast.error("Update failed", {
        description: err.message,
      });
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register("title")} placeholder="Lesson Title" />

      <div className="border rounded-md">
        <MDXEditor
          markdown={values?.description}
          onChange={(v) => setValue("description", v)}
          className="min-h-[300px] p-4"
        />
      </div>

      {hasChanged && (
        <Button type="submit" disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      )}
    </form>
  );
}
