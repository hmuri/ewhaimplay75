import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width:100%;
  height: 100vh;
  background-color: #ffffff;
  display:flex;
  justify-content: center;
  align-items: flex-start;
`

const LayoutContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MiddleContainer = styled(NavLink)`
  position:relative;

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
`

const ProfileImage = styled.img`
  height: 18rem;
  margin: 0.5rem;

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
`

function CastingboardHome() {
  return (
    <Container>
      <LayoutContainer>
        <ImageContainer>
          <MiddleContainer exact to= "/info-play/casting-board/pierre" style={{'marginBottom' : '6rem'}}>
            <ProfileImage src={'/images/profiles/pierre1.jpg'}/>
            <NameBox>피에르</NameBox>
          </MiddleContainer>
        </ImageContainer>
        <ImageContainer>
          <MiddleContainer exact to= "/info-play/casting-board/nicolas" >
            <ProfileImage src={'/images/profiles/nicolas1.jpg'}/>
            <NameBox>니콜라</NameBox>
          </MiddleContainer>
          <MiddleContainer exact to= "/info-play/casting-board/anne" >
            <ProfileImage src={'/images/profiles/anne1.jpg'}/>
            <NameBox>안느</NameBox>
          </MiddleContainer>
        </ImageContainer>
        <ImageContainer>
          <MiddleContainer exact to= "/info-play/casting-board/sopia" style={{'marginTop' : '6rem'}}>
            <ProfileImage src={'/images/profiles/sopia1.jpg'}/>
            <NameBox>소피아</NameBox>
          </MiddleContainer>
        </ImageContainer>
      </LayoutContainer>
    </Container>
  );
}

export default CastingboardHome;