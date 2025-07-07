export const dynamic = "force-dynamic";
import Link from "next/link";

import { GetAllCourses } from "actions";
import { PATH } from "constants/index";

import { Icon } from "@cspaglu/ui/lib/index";
import { Button } from "@cspaglu/ui/components/ui/button";
import { CourseCard } from "components/course/course-card";

export default async function Page() {
  const courses = await GetAllCourses();
  const { Plus } = Icon;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Courses</h1>
        <Link href={`${PATH.COURSES}/add-new-course`}>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Course
          </Button>
        </Link>
      </div>

      {!courses || courses.length === 0 ? (
        <div className="text-gray-500 mt-10 text-center">
          No courses found. Start by creating your first course.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course: any) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
