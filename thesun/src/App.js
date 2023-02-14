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
    display: flex;
    flex-direction: column;
  }
`

const NavContainer = styled.div`
  display: none;

  @media ${props => props.theme.tablet} {
    display: flex;
    visibility: hidden;
    width: 100%;
    height: 9.5rem;
  }
`

const InsideContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;

  @media ${props => props.theme.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`

const RightContainer = styled.div`
  width: 89%;

  display:flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 8rem;
  
  @media ${props => props.theme.tablet} {
    width: 100%;
    background-color: #172F53;
    padding-bottom: ${props => props.isMap ? '5rem' : props.isCastingDetail ? '10rem' : '0'};
    margin-top: ${props => props.isCastingDetail ? '5rem' : '0'};
  }

  @media ${props => props.theme.mobile} {
    padding-bottom: ${props => props.isMap? '11rem' : props.isCastingDetail ? '10rem' : '0'};
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
        <NavContainer/>
        <RightContainer
          isMap={location.pathname.includes('/info-route')}
          isCastingDetail={location.pathname.includes('pierre') || location.pathname.includes('anne') || location.pathname.includes('nicolas') || location.pathname.includes('sopia')}>
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

