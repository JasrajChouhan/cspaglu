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
