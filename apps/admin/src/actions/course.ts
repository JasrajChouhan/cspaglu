import { CreateCourseSchemaType } from "@cspaglu/common";

const API_BASE_URI = `${process.env.NEXT_PUBLIC_API_URI}/api/v1`;

export async function CreateCourse(data: CreateCourseSchemaType) {
  const resp = await fetch(`${API_BASE_URI}/courses/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!resp.ok) {
    const message = await resp.text();
    throw new Error(message || "Failed to create course");
  }

  const result = await resp.json();
  return result.data;
}

// ============= Get Courese ============

export async function GetAllCourses() {
  const resp = await fetch(`${API_BASE_URI}/courses/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!resp.ok) {
    const message = await resp.text();
    throw new Error(message || "Failed to find courses");
  }

  const result = await resp.json();
  return result.data;
}
export async function GetCourseById(courseId: string) {
  const resp = await fetch(`${API_BASE_URI}/courses/${courseId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!resp.ok) {
    const message = await resp.text();
    throw new Error(message || "Failed to find course");
  }

  const result = await resp.json();
  return result.data;
}

// ============= ADD Lesson in an indiviual course ============

export async function CreateLesson(data: any, courseId: string) {
  const resp = await fetch(`${API_BASE_URI}/courses/${courseId}/lessons/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!resp.ok) {
    const message = await resp.text();
    throw new Error(message || "Failed to create lesson");
  }

  const result = await resp.json();
  return result.data;
}
