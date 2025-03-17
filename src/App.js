import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Projects from "./components/Projects"
import Skills from './components/Skills'
import Education from "./components/Education"
import WorkExperience from './components/WorkExperience'
import Certificates from './components/Certificates'
import NotFound from './components/NotFound'


import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<AboutMe/>}/>
        <Route exact path="/skills" element={<Skills/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/education" element={<Education/>}/>
        <Route exact path="/experience" element={<WorkExperience/>}/>
        <Route exact path="/certificates" element={<Certificates/>}/>
        <Route path="*" element={<NotFound to="/not-found" />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
