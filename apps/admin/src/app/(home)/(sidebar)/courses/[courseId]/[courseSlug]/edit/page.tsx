import { GetCourseById } from "actions";
import { GetAllLessons } from "actions/lesson";
import CouseSearchBar from "components/course/searchbar";

export default async function LessonPage({
  params,
}: {
  params: Promise<{
    courseId: string;
    courseSlug: string;
  }>;
}) {
  const { courseId, courseSlug } = await params;

  if (!courseId || !courseSlug) return;

  // find all lessons of this course
  const lessons = await GetAllLessons(courseId);
  const course = await GetCourseById(courseId);

  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">{course.title}</h1>
          <CouseSearchBar />
        </div>
      </div>
      {lessons.map((lesson: any) => (
        <h1 key={lesson.id}>{lesson.title}</h1>
      ))}
    </div>
  );
}
