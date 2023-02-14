import { React, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar.js';
import Main from './pages/Main.js';
import Player from './pages/Player.js';
import Thesun from './pages/Thesun.js';
import Ticket from './pages/Ticket.js';
import Map from './pages/Map.js';
import NotFound from './pages/NotFound.js';
import Footer from './components/Footer.js';
import FloatingBtn from './components/FloatingBtn/FloatingBtn.js';
import { useLocation, Route, Routes } from 'react-router-dom';

const Container = styled.div`
  background-color: #172F53;
  
  @media ${props => props.theme.tablet} {
    height: calc(var(--vh, 1vh) * 100);
    position: relative;
  }
`

const InsideContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
`

const RightContainer = styled.div`
  width: 89%;

  display:flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 8rem;
  
  @media ${props => props.theme.tablet} {
    width: 100%;
    height: auto;
    margin-top: 5.5rem;
    padding-bottom: ${props => props.isCastingBoard? '0' : '5rem'};
    background-color: #172F53;
  }

  @media ${props => props.theme.mobile} {
    width: 100%;
    height: ${props => props.isMain? 'auto' : '100%'};
    background-color: #172F53;
  }
`

function App({props}) {
  const location = useLocation();

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Container>
      <Navbar location={location.pathname}/>
      <InsideContainer>
        <RightContainer isMain={location.pathname.includes('/info-implay') || location.pathname.includes('/info-play')} isCastingBoard={location.pathname.includes('/casting-board') || location.pathname.includes('/director-says')}>
              <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/info-implay/*" element={<Player />}></Route>
                <Route path="/info-play/*" element={<Thesun location={location.pathname} />}></Route>
                <Route path="/info-ticket/*" element={<Ticket />}></Route>
                <Route path="/info-route" element={<Map />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            <Footer/>
          </RightContainer>
        <FloatingBtn/>
      </InsideContainer>
    </Container>
  );
}

export default App;

