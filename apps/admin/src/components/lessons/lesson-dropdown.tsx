"use client";

import { useState } from "react";
import { Card, CardContent } from "@cspaglu/ui/components/ui/card";
import { Button } from "@cspaglu/ui/components/ui/button";
import LessonForm from "./lesson-form";
import { Icon } from "@cspaglu/ui/lib/index";

export default function LessonDropDown({
  lesson,
  courseId,
}: {
  lesson: any;
  courseId: string;
}) {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const { ChevronDown, ChevronRight, Pencil } = Icon;

  return (
    <Card className="transition-all duration-200 shadow-sm border hover:shadow-md">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2 font-semibold text-lg">
          {open ? <ChevronDown /> : <ChevronRight />}
          {lesson.title}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            setEditMode((prev) => !prev);
            setOpen(true);
          }}
        >
          <Pencil className="h-4 w-4 mr-1" />
          {editMode ? "Cancel" : "Edit"}
        </Button>
      </div>

      {open && (
        <CardContent className="p-4">
          {editMode ? (
            <LessonForm
              lesson={lesson}
              setEditMode={setEditMode}
              courseId={courseId}
            />
          ) : (
            <div className="text-muted-foreground whitespace-pre-wrap text-sm">
              {lesson.description?.slice(0, 300) || "No description"}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
