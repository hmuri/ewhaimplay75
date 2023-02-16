import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Information from '../components/Thesun/Information.js';
import Writer from '../components/Thesun/Writer.js';
import Director from '../components/Thesun/Director.js';
import Castingboard from '../components/Thesun/Castingboard.js';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #172F53;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   @media ${props => props.theme.tablet} {
      padding: 0 1.5rem;
    }
`

function Thesun() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="" element={<Information />}></Route>
          <Route path="/writer" element={<Writer />}></Route>
          <Route path="/director-says" element={<Director />}></Route>
          <Route path="/casting-board/*" element={<Castingboard />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default Thesun;