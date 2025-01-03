import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience';
import Contact from './components/Contact';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<AboutMe/>}/>
        <Route exact path="/experience" element={<Experience/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
