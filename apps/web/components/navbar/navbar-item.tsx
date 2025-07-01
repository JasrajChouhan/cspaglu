"use client";
import Link from "next/link";
import { NavbarItemType } from "constant";
import { ChevronDown } from "lucide-react";

interface NavbarItemProps {
  data: NavbarItemType;
}

export default function NavbarItem({ data }: NavbarItemProps) {
  const { isDropdown, name, href = "#" } = data;

  return (
    <Link
      href={href}
      className="
				inline-flex items-center gap-1
				px-4 py-2 rounded-full
				text-sm font-medium
				text-zinc-800 dark:text-zinc-100
				bg-white dark:bg-zinc-900
				border border-zinc-300 dark:border-zinc-700
				hover:bg-zinc-100 dark:hover:bg-zinc-800
				hover:border-zinc-400 dark:hover:border-zinc-600
				transition-colors duration-200 ease-in-out
				cursor-pointer select-none
			"
    >
      <span>{name}</span>
      {isDropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
    </Link>
  );
}
