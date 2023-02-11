import React from 'react';
import styled from 'styled-components';
import WriterIMG from '../../assets/images/Theson/writer.png';

const Container = styled.div`
  width:100%;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
`

const LeftBox = styled.div`
  width : 30rem;
  white-space: pre-wrap;
  color: #ffffff;
  font-weight: 100;
  font-size: 1rem;
  line-height: 200%;
`

const RightBox = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Poster = styled.img`
  width: 100%;
`

const NameText = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 1rem;
`

function Writer() {
  return (
    <Container>
      <LeftBox>프랑스의 젊은 작가이자 연극 연출자이자 영화 감독.{'\n'}연극 ‘아들(Le Fils)’의 원작 작가이다.{'\n\n'}22살에 첫 소설 ‘인공 눈’을 통해 신인상을 수상하며{'\n'}화려한 작품활동을 시작한다. {'\n'}이른바 가족 3부작이라 불리는 연극 <b>‘어머니’ , ‘아버지’, ‘아들’</b>을{'\n'}통해 가족 간의 복잡한 애정과 갈등을 심도 있게 그려냈다.{'\n'}특히 ‘아버지’ 는 수많은 수상과 함께 작가 본인이 감독한 영화{'\n'}'The Father'로도 제작되어 큰 성공을 거두었으며,{'\n'}‘아들’ 역시 영화 'The Son'으로 제작되어{'\n'}제79회 베니스 국제 영화제에서 최초로 공개 되었다.{'\n'}{'\n'}인간의 관계, 심리 속에 자리한 아이러니와 비극을 탁월하게{'\n'}표현하는 그의 작품 세계는 여전히 활발하게 구축되고 있다. </LeftBox>
      <RightBox>
        <Poster src={WriterIMG}/>
        <NameText>플로리앙 젤레르 (1979~) </NameText>
      </RightBox>
    </Container>
  );
}

export default Writer;