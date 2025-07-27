import { UpdateLessonInputType } from "@cspaglu/common";
import { config } from "config/env";

export async function GetAllLessons(courseId: string) {
  const resp = await fetch(
    `${config.API_BASE_URI}/courses/${courseId}/lessons`,
    {
      method: "GET",
    },
  );

  if (!resp.ok) {
    const message = await resp.text();
    throw new Error(message || "Failed to create course");
  }

  const result = await resp.json();
  return result.data;
}

export async function UpdateLesson(
  courseId: string,
  lessonId: string,
  data: UpdateLessonInputType,
) {
  const resp = await fetch(
    `${config.API_BASE_URI}/courses/${courseId}/lessons/${lessonId}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    },
  );

  if (!resp.ok) {
    const message = await resp.text();
    throw new Error(message || "Failed to update lesson");
  }

  const result = await resp.json();
  return result.data;
}
