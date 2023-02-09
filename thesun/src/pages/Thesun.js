import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Information from '../components/Thesun/Information.js';
import Writer from '../components/Thesun/Director.js';
import Director from '../components/Thesun/Director.js';
import Castingboard from '../components/Thesun/Castingboard.js';
import Caution from '../components/Thesun/Caution.js';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #172F53;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

function Thesun({match}) {
  return (
    <>
      <Container>
        <Routes>
          <Route path="" element={<Information />}></Route>
          <Route path="/writer" element={<Writer />}></Route>
          <Route path="/director-says" element={<Director />}></Route>
          <Route path="/casting-board" element={<Castingboard />}></Route>
          <Route path="/caution" element={<Caution />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default Thesun;