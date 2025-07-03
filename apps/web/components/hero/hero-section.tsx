import Spark from "./spark";
import JoinWaitList from "components/form/waitlist";

export default function HeroSection() {
  return (
    <section className="container space-y-8 pb-12 pt-10 md:pb-20 md:pt-16 lg:py-18 dark:border-x dark:border-b border-dashed border-x-2 border-b-2">
      <div className="mx-auto flex justify-center">
        <Spark />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center space-y-6">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          <span className="text-primary">Master</span>{" "}
          <span className="text-foreground">Computer Science</span> with{" "}
          <span className="underline decoration-primary underline-offset-4">
            Free, Interactive
          </span>{" "}
          Courses
        </h1>

        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground">
          Build your foundations in{" "}
          <span className="font-semibold text-foreground">Data Structures</span>
          , <span className="font-semibold text-foreground">Algorithms</span>,
          and{" "}
          <span className="font-semibold text-foreground">Problem Solving</span>{" "}
          all in one place, at your pace, and 100% free.
        </p>

        {/* TODO: Waitlist form */}
        {/* <div className='w-[80%] max-w-md flex flex-col sm:flex-row items-center gap-3'> */}
        <JoinWaitList />
        {/* </div> */}
      </div>
    </section>
  );
}
