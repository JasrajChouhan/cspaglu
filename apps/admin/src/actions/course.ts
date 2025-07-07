import { CreateCourseSchemaType } from "@cspaglu/common";

const API_BASE_URI = `${process.env.NEXT_PUBLIC_API_URI}/api/v1`;

export async function CreateCourse(data: CreateCourseSchemaType) {
  try {
    const resp = await fetch(`${API_BASE_URI}/courses/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    const result = await resp.json();
    return result.data;
  } catch (error) {
    console.log("Error while creating course", error);
    return null;
  }
}
