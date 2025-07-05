// components/course/sidebar.tsx

import { FindCourseBySlug, FindLessonByCourseId } from "actions";
import Link from "next/link";

interface Props {
  slug: string;
}

export default async function CourseSidebar({ slug }: Props) {
  const courseRes = await FindCourseBySlug(slug);
  const course = courseRes?.data;

  if (!course) return null;

  const lessonsRes = await FindLessonByCourseId(course.id);
  const lessons = lessonsRes?.data || [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">{course.name}</h2>
      <div className="flex flex-col gap-2">
        {lessons.map((lesson: any) => (
          <Link
            key={lesson.id}
            href={`/courses/${slug}/lessons/${lesson.id}`}
            className="hover:underline"
          >
            {lesson.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
