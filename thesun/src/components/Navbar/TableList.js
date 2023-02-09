import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TableContainer = styled(NavLink)`
    width: 100%;
    text-decoration: none;
`

const TableTitle = styled.div`
    width: 100%;
    height: 7rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-family: 'Spoqa-Han-Sans';
    font-weight: 700;
    color: ${props => props.isActive == true ? '#ffffff' : '#172F53'};
    background-color: ${props => props.isActive == true ? '#172F53' : '#ffffff'};
`

const TableInsideConatiner = styled.div`
    display: ${props => props.isActive == true ? 'flex' : 'none'};
    width: 100%;
    background-color: #516AAC;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SmallElem = styled(NavLink)`
    font-size: 0.9rem;
    font-family: 'Spoqa-Han-Sans';
    font-weight: ${props => props.isActive ? '700' : '400'};
    color: #ffffff;
    cursor: pointer;
    padding : 0.8rem;
    text-decoration: none;
`

function TableList({location, page, title, elements}) {

  return (
    <TableContainer exact to={"/"+page}>
        <TableTitle isActive={location.includes(page)}>{title}</TableTitle>
        <TableInsideConatiner isActive={location.includes(page)}>
        {elements.map((content) => (
            <SmallElem
              exact to = {"/"+page+"/"+content.page}
              isActive={content.page ? location === "/"+page+"/" + content.page : (location === "/"+page) || (location === "/"+page+"/")}
            >
              {content.title}
            </SmallElem>
        ))}
        </TableInsideConatiner>
    </TableContainer>
  );
}

export default TableList;