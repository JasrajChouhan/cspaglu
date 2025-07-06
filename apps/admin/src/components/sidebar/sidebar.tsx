"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "constants/index";
import { cn } from "@cspaglu/ui/lib/utils";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full h-full p-4">
      <h2 className="text-xl font-bold mb-4">Admin</h2>
      <nav className="space-y-2">
        {SIDEBAR_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 p-2 rounded-md text-sm font-medium hover:bg-gray-100",
              pathname === item.href && "bg-gray-100 text-primary",
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
