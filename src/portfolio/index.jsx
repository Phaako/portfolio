import Home from "./components/home"
import About from "./components/about"
import Navbar from "../components/navbar.jsx"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Projects from "./components/experience"
import Contact from "./components/experience"


const Portfolio = () => {
  return (
    <div className="bg-[#151312] h-screen w-screen ">
      <Navbar/>
      <Home />
      <About />
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Portfolio