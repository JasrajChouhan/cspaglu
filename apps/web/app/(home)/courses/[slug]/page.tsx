import { FindCourseBySlug } from "actions";

export interface CourseSlugProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: CourseSlugProps) {
  const { slug } = await params;

  // fetch a course bassed on course slug
  const course = await FindCourseBySlug(slug);
  console.log(course);

  if (!course) {
    return <div> not found cours {slug} </div>;
  }

  return <div>I am course page</div>;
}
