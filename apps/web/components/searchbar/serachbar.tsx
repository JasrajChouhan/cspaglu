import { Input } from "@cspaglu/ui/components/ui/input";

export default function Searchbar() {
  return (
    <div className="w-full md:w-64 h-10">
      <Input
        type="text"
        placeholder="Binary Search Tree..."
        aria-label="Search"
        className="w-full h-full rounded-full border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
