import { Routes, Route } from "react-router-dom"

import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Activities from "./components/Activities"
import Experience from "./components/Experience"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  )
}

export default App