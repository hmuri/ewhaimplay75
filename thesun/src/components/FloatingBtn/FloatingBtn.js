import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import instagram from '../../assets/images/Footer/footer-icon-instagram.png';
import kakaotalk from '../../assets/images/Footer/footer-icon-kakaotalk.png';
import twitter from '../../assets/images/Footer/footer-icon-twitter.png';

const Container = styled.div`
    display: none;

    @media ${props => props.theme.tablet} {
        display: flex;
        width: 4rem;
        height: 4rem;
        background-color: #2F558F;
        border-radius: 100%;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
    }
`

function FloatingBtn() {

  return (
    <Container>
    </Container>
  );
}

export default FloatingBtn;