"use client";

import { Button } from "@cspaglu/ui/components/ui/button";
import { icon } from "@cspaglu/common/lib";
import CouseSearchBar from "components/course/searchbar";
import { useRouter } from "next/navigation";

export default function Page() {
  const { Plus } = icon;
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Welcome to Admin Dashboard</h1>
        <div className="flex gap-x-2">
          <CouseSearchBar />
          <Button
            className="cursor-pointer"
            onClick={() => {
              router.push(`/courses/add-new-course/`);
            }}
          >
            <Plus height={10} width={10} />
            <span>Add Course</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
