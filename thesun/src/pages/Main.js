import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #172F53;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CenterBox = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
`

const IconImg = styled.img`
    height: ${props => props.height}rem;
    margin-bottom: 3rem;
`

const Text = styled.div`
    font-size: 1rem;
    font-family: 'Spoqa-Han-Sans';
    font-weight: 100;
    color: #ffffff;
    text-align : center;
    white-space: pre-wrap;
    line-height: 180%;
`

function Main() {
    const randomNum = Math.floor(Math.random() * 3);
    const textList = [
        { 'id' : 0, imageUri: '/images/main-gun.png', text : '고통스럽고 피곤해.\n난 정말 고통스럽고 피곤해, 엄마.', height: '4' },
        { 'id' : 1, imageUri: '/images/main-lamp.png', text : '작은 태양이라고 불렀지.\n그 시절의 걔를 그렇게 불렀던 기억이 나.', height : '8' },
        { 'id' : 2, imageUri: '/images/main-earring.png', text : '' }
    ];

  return (
    <Container>
        <CenterBox>
            <IconImg src={textList[randomNum].imageUri} height={textList[randomNum].height}/>
            <Text>“{textList[randomNum].text}”</Text>
        </CenterBox>
    </Container>
  );
}

export default Main;