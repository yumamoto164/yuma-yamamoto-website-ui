import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { BernieBounce } from "./components/BernieBounce";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <BernieBounce />
      <Header />
      <MainPage />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}
