
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './portfolio/components/about'
import Experience from './portfolio/components/experience'
import Home from './portfolio/components/home'
import Skills from './portfolio/components/skills'
import Projects from './portfolio/components/projects'
import Contact from './portfolio/components/contact'

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "skills",
      element: <Skills/>
    },
    {
      path: "experience",
      element: <Experience/>
    },
    {
      path: "projects",
      element: <Projects/>
    },
    {
      path: "contact",
      element: <Contact/>
    },
  ])
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App
