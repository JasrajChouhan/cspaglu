import { FindCourseBySlug, FindLessonById } from "actions";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface LessonPageProps {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
}

async function fetchMarkdownContent(url: string): Promise<string> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch markdown content from ${url}`);
  }

  return res.text();
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug, lessonId } = await params;
  const course = await FindCourseBySlug(slug);
  const lessonRes = await FindLessonById(lessonId, course.data.id);
  const lesson = lessonRes?.data;

  if (!lesson) return notFound();

  const markdownContent = await fetchMarkdownContent(lesson.contentMd);

  return (
    <div className="prose max-w-full">
      <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>

      <div className="aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-lg"
          src={lesson.videoUrl}
          title={lesson.title}
          allowFullScreen
        />
      </div>

      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}
