import MobileSidebar from "components/course/mobile-sidebar";
import CourseSidebar from "components/course/sidebar";
import React from "react";

export interface CourseSlugProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Props {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseLayout({ children, params }: Props) {
  const { slug } = await params;

  return (
    <div className="flex min-h-screen">
      {/* Mobile trigger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <MobileSidebar slug={slug} />
      </div>

      {/* Sidebar visible only on medium+ screens */}
      <aside className="hidden md:block w-64 border-r">
        <CourseSidebar slug={slug} />
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
