import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Introduction from '../components/Player/Introduction.js';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #172F53;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

function Map({match}) {
  return (
    <>
      <Container>
        <Routes>
          <Route path="" element={<Introduction />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default Map;