import React from 'react';
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
  
  @media ${props => props.theme.mobile} {
    width: 100%;
}
`

function App() {
  const location = useLocation();

  // main
  // info-player
  // info-play
  // info-ticket
  // info-route


  return (
    <>
      <Navbar location={location.pathname}/>
      <Container>
        <RightContainer>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/info-implay/*" element={<Player />}></Route>
              <Route path="/info-play/*" element={<Thesun />}></Route>
              <Route path="/info-ticket/*" element={<Ticket />}></Route>
              <Route path="/info-route" element={<Map />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          <Footer/>
        </RightContainer>
        <FloatingBtn/>
      </Container>
    </>
  );
}

export default App;

