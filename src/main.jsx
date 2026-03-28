import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/home.jsx';
import AboutMe from './Pages/aboutMe.jsx';
import Projects from './Pages/projects.jsx';
import ContactMe from './Pages/contactMe.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contactMe' element={<ContactMe/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);