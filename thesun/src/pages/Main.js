import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #172F53;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.mobile} {
        margin-top: 10rem;
    }
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
    margin-left: ${props => props.left}rem;
`

const Text = styled.div`
    font-size: 1rem;
    font-weight: 100;
    color: #ffffff;
    text-align : center;
    white-space: pre-wrap;
    line-height: 180%;
`

function Main() {
    const randomNum = Math.floor(Math.random() * 3);
    const textList = [
        { 'id' : 0, imageUri: '/images/main-gun.png', text : '이건 단지, 지나가는 시기야.', height: '2' },
        { 'id' : 1, imageUri: '/images/main-lamp.png', text : '난 언제나 고통스러워.\n그리고 피곤해.', height : '8', left: '1' },
        { 'id' : 2, imageUri: '/images/main-earring.png', text : '힘들어도, 삶은 계속 돼.', height : '5'  }
    ];

  return (
    <Container>
        <CenterBox>
            <IconImg src={textList[randomNum].imageUri} height={textList[randomNum].height} left={textList[randomNum].left}/>
            <Text>“{textList[randomNum].text}”</Text>
        </CenterBox>
    </Container>
  );
}

export default Main;