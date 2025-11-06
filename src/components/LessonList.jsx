import { CheckCircle2, PlayCircle, Lock } from "lucide-react";

const lessons = [
  { id: 1, title: "Intro & Setup", duration: "04:12", status: "done" },
  { id: 2, title: "Design Principles", duration: "08:35", status: "done" },
  { id: 3, title: "Color & Type", duration: "12:20", status: "current" },
  { id: 4, title: "Components & Patterns", duration: "16:10", status: "locked" },
  { id: 5, title: "Prototyping", duration: "10:04", status: "locked" },
];

function StatusIcon({ status }) {
  if (status === "done") return <CheckCircle2 className="h-5 w-5 text-emerald-500" />;
  if (status === "current") return <PlayCircle className="h-5 w-5 text-indigo-600" />;
  return <Lock className="h-5 w-5 text-gray-400" />;
}

export default function LessonList() {
  return (
    <section className="mx-auto max-w-md px-4 py-4">
      <h2 className="text-sm font-semibold text-gray-700 mb-2">Lessons</h2>
      <ol className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white overflow-hidden">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="flex items-center gap-3 px-4 py-3">
            <StatusIcon status={lesson.status} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">{lesson.title}</p>
              <p className="text-xs text-gray-500">{lesson.duration}</p>
            </div>
            <button
              disabled={lesson.status === "locked"}
              className={`text-sm font-semibold px-3 py-1.5 rounded-lg transition ${
                lesson.status === "locked"
                  ? "bg-gray-100 text-gray-400"
                  : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
              }`}
            >
              {lesson.status === "current" ? "Resume" : lesson.status === "done" ? "Review" : "Locked"}
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
