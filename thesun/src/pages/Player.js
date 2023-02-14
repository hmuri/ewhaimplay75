import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Introduction from '../components/Player/Introduction.js';
import Lastplays from '../components/Player/Lastplays.js';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #172F53;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function Player() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="" element={<Introduction />}></Route>
          <Route path="/last-plays" element={<Lastplays />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default Player;