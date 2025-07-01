export default function Spark() {
  return (
    <div className="relative inline-flex items-center gap-2 rounded-full border border-transparent bg-white dark:bg-black px-4 py-1 text-sm shadow-md transition-all">
      <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 animate-pulse blur-sm z-[-1]" />

      <span className="text-lg animate-bounce">🌸</span>

      <span className="font-medium text-muted-foreground dark:text-white">
        Join our waitlist
      </span>
    </div>
  );
}
