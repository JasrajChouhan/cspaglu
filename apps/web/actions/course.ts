// Find a course by course-slug
export const FindCourseBySlug = async (slug: string) => {
  const API_BASE_URI = `${process.env.NEXT_PUBLIC_API_URI}/api/v1`;

  try {
    const resp = await fetch(`${API_BASE_URI}/courses/${slug}`, {
      method: "GET",
      next: { revalidate: 60 },
    });

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("Error while fetching course by a it's slug", error);
    return null;
  }
};

export const FindLessonByCourseId = async (id: string) => {
  const API_BASE_URI = `${process.env.NEXT_PUBLIC_API_URI}/api/v1`;

  try {
    const resp = await fetch(`${API_BASE_URI}/courses/${id}/lessons`, {
      method: "GET",
      next: { revalidate: 60 },
    });

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("Error while fetching  course lesson by a course id", error);
    return null;
  }
};
