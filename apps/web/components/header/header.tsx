import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { Button } from "@cspaglu/ui/components/ui/button";
import { Sheet, SheetTrigger } from "@cspaglu/ui/components/ui/sheet";

import Navbar from "components/navbar/navbar";
import { Logo } from "components/logo";
import Searchbar from "components/searchbar/serachbar";
import ToggleThemeButton from "components/theme/toggle-theme";
import MobileSidebar from "components/navbar/mobile-sidebar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-background backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="shrink-0">
          <Logo height={64} width={64} />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Navbar />
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-3 md:gap-4">
          <ToggleThemeButton />
          <div className="hidden lg:block">
            <Searchbar />
          </div>

          <Button
            type="button"
            aria-label="Search"
            variant={"link"}
            className="hidden md:block lg:hidden p-2 rounded-md  transition"
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* Mobile sidebar */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <MobileSidebar />
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
