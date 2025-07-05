export const FindLessonById = async (lessonId: string, courseId: string) => {
  const API_BASE_URI = `${process.env.NEXT_PUBLIC_API_URI}/api/v1`;

  try {
    const resp = await fetch(
      `${API_BASE_URI}/courses/${courseId}/lessons/${lessonId}`,
      {
        method: "GET",
        next: { revalidate: 60 },
      },
    );

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Error fetching lesson by ID:", error);
    return null;
  }
};
