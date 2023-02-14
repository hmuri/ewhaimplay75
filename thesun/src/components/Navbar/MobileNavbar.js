import { React } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MobileDetailContainer = styled.div`
  display: none;

  @media ${props => props.theme.tablet} {
    display: ${props => props.isActive ? 'flex' : 'none'};
    width: 100%;
    height: 4rem;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`

const SmallElem = styled(NavLink)`
  display: none;
  
  @media ${props => props.theme.tablet} {
    display: flex;
    font-size: 1rem;
    font-weight: ${props => props.isActive ? '700' : '400'};
    opacity : ${props => props.isActive ? '1' : '0.5'};
    color: #ffffff;
    cursor: pointer;
    padding : 0.8rem;
    text-decoration: none;
  }
`

function MobileNavbar({location, tableItems}) {
  return (
    <>
      <MobileDetailContainer isActive={location!=='/' || location!=='/info-route'}>
        {tableItems && tableItems.elements.map((content, index) => (
          <SmallElem
            key={index}
            exact to = {"/"+tableItems.page+"/"+content.page}
            isActive={content.page ? location === "/"+tableItems.page+"/" + content.page : (location === "/"+tableItems.page) || (location === "/"+tableItems.page+"/")}
            >
            {content.title}
          </SmallElem>
        ))}
      </MobileDetailContainer>
    </>
  );
}

export default MobileNavbar;