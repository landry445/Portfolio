import Navbar from "./components/header/NavBar";
import MobileNavbar from "./components/header/MobileNavbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import HomeIcon from "./components/icons/HomeIcon";
import InfoIcon from "./components/icons/InfoIcon";
import ProjectIcon from "./components/icons/ProjectIcon";
import ContactIcon from "./components/icons/ContactIcon";
import { useStateContext } from "./context/ContextProvider";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const { theme } = useStateContext();
  const body = document.getElementById("root");
  const links = [
    { label: "Accueil", href: "#home", icon: <HomeIcon style="w-6 h-6" /> },
    {
      label: "Compétences",
      href: "#skills",
      icon: <InfoIcon style="w-6 h-6" />,
    },
    {
      label: "Projets",
      href: "#projects",
      icon: <ProjectIcon style="w-6 h-6" />,
    },
    {
      label: "Contact",
      href: "#contact",
      icon: <ContactIcon style="w-6 h-6" />,
    },
  ];

  if (body) {
    if (theme === "Dark") {
      body.className = "background-dark";
    } else {
      body.className = "background-light";
    }
  }

  return (
    <div className="flex min-h-screen">
      <Navbar links={links} />
      <MobileNavbar links={links} />
      <div className="flex-1">
        <Home />
        <div
          className="
          snap-y
          container
          md:w-11/12
          mx-auto
          px-0
          sm:px-5
          md:px-5
          lg:px-8
          xl:px-10
          "
        >
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
