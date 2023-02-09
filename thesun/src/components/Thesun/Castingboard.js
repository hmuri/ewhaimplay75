import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CastingboardHome from './CastingboardHome';
import CastingboardDetail from './CastingBoardDetail';

function Castingboard() {
  return (
    <>
      <Routes>
        <Route path="" element={<CastingboardHome />}></Route>
        <Route path="/:name" element={<CastingboardDetail/>}></Route>
      </Routes>
    </>
  );
}

export default Castingboard;