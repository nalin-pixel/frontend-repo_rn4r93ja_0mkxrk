import { Search, Bell } from "lucide-react";

export default function MobileHeader() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-md px-4 py-3 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 grid place-items-center text-white font-bold shadow-sm">
          C
        </div>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses, lessons..."
            className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-gray-100 focus:bg-white border border-transparent focus:border-indigo-200 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition"
          />
        </div>
        <button className="relative p-2 rounded-lg hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white" />
        </button>
      </div>
    </header>
  );
}
