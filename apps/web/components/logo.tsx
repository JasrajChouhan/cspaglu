import Image from "next/image";

export const Logo = ({ height, width }: { height: number; width: number }) => {
  return (
    <div className="relative flex items-center gap-1">
      <Image
        src="/logo-removebg-preview.png"
        alt="logo"
        width={height}
        height={width}
        className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto object-contain"
        priority
      />
      <span className="absolute -bottom-1 left-12 sm:left-14 md:left-16 text-xs text-muted-foreground bg-gray-200 dark:bg-zinc-800 px-1.5 rounded-md shadow">
        alpha
      </span>
    </div>
  );
};
