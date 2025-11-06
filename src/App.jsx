import MobileHeader from "./components/MobileHeader";
import CourseHero from "./components/CourseHero";
import LessonList from "./components/LessonList";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 flex flex-col">
      <MobileHeader />

      <main className="flex-1 pb-24">
        <CourseHero />
        <LessonList />
      </main>

      <BottomNav />
    </div>
  );
}

export default App;
