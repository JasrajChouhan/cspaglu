"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@cspaglu/ui/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { icon } from "@cspaglu/common/lib";
import { useState } from "react";
import { Button } from "@cspaglu/ui/components/ui/button";

export const SheetSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden absolute top-4 left-4 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant={"secondary"}
            className="p-2 rounded-md border bg-white shadow-md"
          >
            <icon.Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
