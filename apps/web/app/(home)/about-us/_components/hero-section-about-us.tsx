export default function HeroSectionAboutUs() {
  return (
    <section className="w-full px-6 bg-background text-foreground py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            About{" "}
            <span className="dark:text-white border bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-800 border-dashed px-2 dark:hover:bg-zinc-900 transition-colors duration-200">
              CSPAGLU
            </span>
          </h1>
        </div>

        <div className="flex-1 w-full">
          <div className="bg-cyan-50 cursor-pointer  dark:bg-muted/20 border border-dashed rounded-xl px-6 py-6 md:px-8 md:py-6 max-w-prose mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground">
              I created{" "}
              <span className="font-bold border bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-900 px-1 rounded">
                CSPAGLU
              </span>{" "}
              to make Computer Science learning more accessible, engaging, and
              100% free. With interactive courses, you'll master data
              structures, algorithms, and problem-solving at your own pace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
