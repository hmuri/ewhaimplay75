import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Polygon from '../../assets/images/polygon.png';

const TableContainer = styled(NavLink)`
    width: 100%;
    text-decoration: none;

    @media ${props => props.theme.tablet} {
      height: 2.5rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items:center;
      position: relative;
    }
`

const TableTitle = styled.div`
    width: 100%;
    height: 6.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.isActive === true ? '#ffffff' : '#172F53'};
    background-color: ${props => props.isActive === true ? '#172F53' : '#ffffff'};

    @media ${props => props.theme.tablet} {
      height: 2.5rem;
      background-color: #ffffff;
      color: #172F53;
      font-size: 1rem;
      font-weight: ${props => props.isActive === true ? '700' : '400'};
    }
`

const PolygonImg = styled.img`
    display: none;

    @media ${props => props.theme.tablet} {
      display: ${props => props.isActive === true ? 'flex' : 'none'};
      width: 0.6rem;
      position: absolute;
      bottom: 0;
    }
`

const TableInsideConatiner = styled.div`
    display: ${props => props.isActive === true ? 'flex' : 'none'};
    width: 100%;
    background-color: #516AAC;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 0;

    @media ${props => props.theme.tablet} {
      display: none;
    }
`

const SmallElem = styled(NavLink)`
    font-size: 0.9rem;
    font-weight: ${props => props.isActive ? '700' : '400'};
    color: #ffffff;
    cursor: pointer;
    padding : 0.8rem;
    text-decoration: none;

    @media ${props => props.theme.tablet} {
      display: none;
    }
`

function TableList({location, page, title, elements}) {

  return (
    <>
      <TableContainer exact to={"/"+page}>
          <TableTitle isActive={location.includes(page)}>{title}</TableTitle>
          <PolygonImg src={Polygon} isActive={location.includes(page)}/>
          <TableInsideConatiner isActive={location.includes(page) && (location !== '/info-route')}>
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
    </>
  );
}

export default TableList;