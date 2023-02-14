import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Information from '../components/Ticket/Information.js';
import Goods from '../components/Ticket/Goods.js';
import Seats from '../components/Ticket/Seats.js';
import Caution from '../components/Ticket/Caution.js';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #172F53;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.mobile} {
    padding-bottom: 5rem;
  }
`

function Ticket() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="" element={<Information />}></Route>
          <Route path="/goods" element={<Goods />}></Route>
          <Route path="/seats" element={<Seats />}></Route>
          <Route path="/notice" element={<Caution />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default Ticket;