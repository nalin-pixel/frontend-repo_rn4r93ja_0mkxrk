import { Play } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="mx-auto max-w-md px-4 pt-4 pb-2">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white">
        <div className="p-5">
          <p className="text-xs/4 uppercase tracking-wider text-white/80">Featured Course</p>
          <h1 className="mt-1 text-2xl font-semibold">Mobile App Design Fundamentals</h1>
          <p className="mt-1 text-white/90 text-sm">
            Learn to craft beautiful, accessible mobile apps from wireframe to handoff.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-white text-indigo-700 px-3.5 py-2 text-sm font-semibold shadow-sm hover:bg-white/90">
              <Play className="h-4 w-4" />
              Continue
            </button>
            <span className="text-white/80 text-xs">12 of 24 lessons completed</span>
          </div>

          <div className="mt-3 h-2 w-full rounded-full bg-white/30">
            <div className="h-2 w-1/2 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
