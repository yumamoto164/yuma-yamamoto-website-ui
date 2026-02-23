import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { Projects } from "./components/Projects";
import { BernieBounce } from "./components/BernieBounce";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <BernieBounce />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainPage />
      <Projects />
    </div>
  );
}
