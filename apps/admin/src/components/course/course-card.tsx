"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@cspaglu/ui/components/ui/card";
import { useRouter } from "next/navigation";
import { cn } from "@cspaglu/ui/lib/utils";
import { PATH } from "constants/index";
import Image from "next/image";

export function CourseCard({ course }: any) {
  const router = useRouter();

  return (
    <Card
      onClick={() =>
        router.push(`${PATH.COURSES}/${course.id}/${course.slug}/edit`)
      }
      className={cn(
        "cursor-pointer hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-muted",
      )}
    >
      <CardHeader>
        {course.thumbnailUrl && (
          <Image
            src={course?.thumbnailUrl}
            alt={`${course.title}-${course.slug}`}
            height={100}
            width={100}
          />
        )}
        <CardTitle className="text-lg font-semibold line-clamp-1">
          {course.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.description || "No description provided."}
        </p>
      </CardContent>
    </Card>
  );
}
