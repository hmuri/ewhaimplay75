import React from 'react';
import styled from 'styled-components';
import WriterIMG from '../../assets/images/Theson/writer.png';

const Container = styled.div`
  width:100%;
  display:flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${props => props.theme.tablet} {
    margin-top: 9rem;
  }

  @media ${props => props.theme.mobile}{
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 15rem;
  }
`

const LeftBox = styled.div`
  white-space: pre-wrap;
  color: #ffffff;
  font-weight: 100;
  font-size: 1.2rem;
  line-height: 200%;

  @media ${props => props.theme.mobile}{
    display: none;
    font-size: 1rem;
  }  
`

const UnderBox_ = styled.div`
  display: none;

  @media ${props => props.theme.mobile}{
    display: flex;
    width : 90%;
    color: #ffffff;
    font-weight: 200;
    font-size: 0.8rem;
    line-height: 180%;
    padding-top: 0.8rem;
    padding-bottom: 1.8rem;
  }
`

const RightBox = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Poster = styled.img`
  width: 20rem;

  @media ${props => props.theme.mobile}{
    width: 70%;
  }  
`

const NameText = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 1.3rem;
  margin-top: 1.8rem;
`

function Writer() {
  return (
    <Container>
      <LeftBox>프랑스의 젊은 작가이자 연극 연출자이자 영화 감독.{'\n'}연극 ‘아들(Le Fils)’의 원작 작가이다.{'\n\n'}22살에 첫 소설 ‘인공 눈’을 통해 신인상을 수상하며{'\n'}화려한 작품활동을 시작한다. {'\n'}이른바 가족 3부작이라 불리는 연극 <b>‘어머니’ , ‘아버지’, ‘아들’</b>을{'\n'}통해 가족 간의 복잡한 애정과 갈등을 심도 있게 그려냈다.{'\n'}인간의 관계, 심리 속에 자리한 아이러니와 비극을 탁월하게{'\n'}표현하는 그의 작품 세계는 여전히 활발하게 구축되고 있다. </LeftBox>
      <RightBox>
        <Poster src={WriterIMG}/>
        <NameText>플로리앙 젤레르 (1979~) </NameText>
        <UnderBox_>프랑스의 젊은 작가이자 연극 연출자이자 영화 감독. 연극 ‘아들(Le Fils)’의 원작 작가이다.{'\n\n'}22살에 첫 소설 ‘인공 눈’을 통해 신인상을 수상하며{'\n'}화려한 작품활동을 시작한다. {'\n'}이른바 가족 3부작이라 불리는 연극 ‘어머니’ , ‘아버지’, ‘아들’을{'\n'}통해 가족 간의 복잡한 애정과 갈등을 심도 있게 그려냈다.{'\n'}인간의 관계, 심리 속에 자리한 아이러니와 비극을 탁월하게{'\n'}표현하는 그의 작품 세계는 여전히 활발하게 구축되고 있다. </UnderBox_>
      </RightBox>
    </Container>

  );
}

export default Writer;