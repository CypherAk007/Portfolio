import styled,{ ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import { useState } from 'react';

const Body = styled.div`
  background-color:${({theme}) => theme.bg};
  width:100%; 
  height:100%;
  overflow-x:hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
const App = ()=>{
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>

      <Navbar></Navbar>
      <Body>
        <HeroSection></HeroSection>
        <Wrapper>
        <Skills></Skills>
        <Experience></Experience>
        </Wrapper>
        <Projects openModal={openModal} setOpenModal={setOpenModal}></Projects>
        <Wrapper>
          <Education></Education>
          <Contact></Contact>
        </Wrapper>
        <Footer></Footer>
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App;