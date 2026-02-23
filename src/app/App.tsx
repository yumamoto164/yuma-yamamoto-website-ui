import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { Projects } from "./components/Projects";
import { BernieBounce } from "./components/BernieBounce";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <BernieBounce />
      <Header />
      <MainPage />
      <Projects />
    </div>
  );
}
