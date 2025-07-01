"use client";

import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@cspaglu/ui/components/ui/sheet";
import { navbarItemsData, NavbarItemType } from "../../constant";
import Link from "next/link";
import { Logo } from "../logo";
import ToggleThemeButton from "components/theme/toggle-theme";

export default function MobileSidebar() {
  return (
    <SheetContent
      side="top"
      className="w-full px-6 pt-6 pb-10 rounded-b-xl shadow-md"
    >
      <SheetHeader>
        <SheetTitle className="text-left text-xl font-semibold flex items-center gap-3">
          <SheetClose>
            <Link href="/" className="flex items-center gap-2">
              <Logo height={300} width={300} />
            </Link>
          </SheetClose>
        </SheetTitle>
      </SheetHeader>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-4">
        {navbarItemsData.map((item: NavbarItemType) => (
          <SheetClose asChild key={item.name}>
            <Link
              href={item.href || "#"}
              className="text-base font-medium text-zinc-700 dark:text-zinc-200 hover:dark:text-zinc-400 hover:text-zinc-900  transition-colors duration-200 ease-in-out"
            >
              {item.name}
            </Link>
          </SheetClose>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-8 border-t pt-4 flex justify-between items-center text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} CSPAGLU</span>
        <ToggleThemeButton />
      </div>
    </SheetContent>
  );
}
