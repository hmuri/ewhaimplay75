import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MiddleContainer = styled(NavLink)`
  position: relative;
  margin-bottom : ${props=> props.marginBottom || '0'};

  -webkit-filter: grayscale(100%);
  -webkit-transition: .5s ease-in-out;
  -moz-filter: grayscale(100%); 
  -moz-transition: .5s ease-in-out;
  -o-filter: grayscale(100%); 
  -o-transition: .5s ease-in-out;

  :hover {
    -webkit-filter: grayscale(0%);
    -webkit-transition: .5s ease-in-out;
    -moz-filter: grayscale(0%);
    -moz-transition: .5s ease-in-out;
    -o-filter: grayscale(0%);
    -o-transition: .5s ease-in-out;
  }

  @media ${props => props.theme.tablet} {
    margin-bottom: 0;
  }
`

const ProfileImage = styled.img`
  height: 18rem;
  margin: 0.5rem;

  @media ${props => props.theme.mobile} {
    height: 15rem;
    margin: 0.3rem 0.4rem;
  }
`

const NameBox = styled.div`
  position:absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%);
  font-weight: 700;
  color: #ffffff;
  font-size: 1rem;
  text-shadow: 3px 3px 6px black;

  @media ${props => props.theme.tablet} {
    bottom: 2rem;
  }  
`

function CastingCard({nameEN, nameKR, marginBottom, margin}) {

  return (
    <MiddleContainer exact to= {"/info-play/casting-board/"+nameEN} marginBottom={marginBottom} margin={margin}>
        <ProfileImage src={'/images/profiles/'+nameEN+'1.jpg'}/>
        <NameBox>{nameKR}</NameBox>
    </MiddleContainer>
  );
}

export default CastingCard;