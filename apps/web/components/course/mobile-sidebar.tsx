"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@cspaglu/ui/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import CourseSidebar from "./sidebar";

interface Props {
  slug: string;
}

export default function MobileSidebar({ slug }: Props) {
  return (
    <Sheet>
      <SheetTrigger className="p-2">
        <MenuIcon className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left">
        <CourseSidebar slug={slug} />
      </SheetContent>
    </Sheet>
  );
}
