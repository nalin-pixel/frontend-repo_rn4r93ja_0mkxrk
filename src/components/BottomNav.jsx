import { Home, BookOpen, Trophy, User } from "lucide-react";

const tabs = [
  { key: "home", label: "Home", icon: Home },
  { key: "courses", label: "Learn", icon: BookOpen },
  { key: "achievements", label: "Goals", icon: Trophy },
  { key: "profile", label: "Profile", icon: User },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-20">
      <div className="mx-auto max-w-md px-4 pb-4">
        <div className="rounded-2xl border border-gray-100 bg-white shadow/5 backdrop-blur">
          <ul className="grid grid-cols-4">
            {tabs.map(({ key, label, icon: Icon }) => (
              <li key={key} className="">
                <button className="w-full py-3.5 flex flex-col items-center gap-1 text-xs font-medium text-gray-600 hover:text-indigo-600">
                  <Icon className="h-5 w-5" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
