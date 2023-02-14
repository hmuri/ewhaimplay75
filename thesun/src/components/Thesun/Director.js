import React from 'react';
import styled from 'styled-components';
import backgroundIMG from '../../assets/images/Theson/director-background.png';

const Container = styled.div`
  width:100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  background: ${props => `url(${props.imageUri}) no-repeat center right`};

  @media ${props => props.theme.mobile} {
    background: none;
    background-color: #172F53;
    height: 100%;
    margin-top: 2rem;
  }
`

const TextBox = styled.div`
  width: 73%;
  text-align:center;
  font-weight: 700;
  line-height: 200%;
  font-size: 1.2rem;
  color: #ffffff;
  white-space: pre-wrap;

  @media ${props => props.theme.mobile} {
    display: none;
  }
`

const MobileTextBox = styled.div`
  display: none;

  @media ${props => props.theme.mobile} {
    display: flex;
    text-align:center;
    color: #ffffff;
    white-space: pre-wrap;
    font-weight: 500;
    line-height: 180%;
    font-size: 0.88rem;
  }
`

function Director() {
  return (
    <Container imageUri={backgroundIMG}>
      <TextBox>
        니콜라가 살아내는 일상은 빙산의 일각 같습니다.{'\n'}그 안에 어떤 치열한 싸움들이 침묵 속에 잠겨있는지를 가늠해봅니다.{'\n'}그리고 수없이 많은 니콜라들을 가늠해봅니다.{'\n'}모두가 가지고 있다고, 아무것도 아닌 게 되지는 않습니다.{'\n'}아무렇지 않아 보인다고, 가지고 있지 않은 게 아닙니다.{'\n'}차마 마주하지 못하고 모른 척 고개를 돌렸던 수많은 순간들을 대신해{'\n'}니콜라의 빙산을 무대에 올려보고자 합니다.{'\n\n'}오늘도 침묵 속에 치열히 싸우고 있을 여러분의 마음 속 니콜라들에게{'\n'}‘더 썬’이 작은 볕을 내줄 수 있길 바라면서 그들을 무대 위로 떠나 보냅니다.
      </TextBox>
      <MobileTextBox>
        니콜라가 살아내는 일상은 {'\n'}빙산의 일각 같습니다.{'\n'}그 안에 어떤 치열한 싸움들이{'\n'}침묵 속에 잠겨있는지를 가늠해봅니다.{'\n'}그리고 수없이 많은 니콜라들을 {'\n'}가늠해봅니다.{'\n'}{'\n'}모두가 가지고 있다고,{'\n'} 아무것도 아닌 게 되지는 않습니다.{'\n'}아무렇지 않아 보인다고, {'\n'}가지고 있지 않은 게 아닙니다.{'\n'}{'\n'}차마 마주하지 못하고{'\n'}모른 척 고개를 돌렸던 {'\n'}수많은 순간들을 대신해{'\n'}니콜라의 빙산을 무대에 올려보고자 합니다.{'\n\n'}오늘도 침묵 속에 치열히 싸우고 있을 {'\n'}여러분의 마음 속 니콜라들에게{'\n'}‘더 썬’ 이 작은 볕을 내줄 수 있길 바라면서 {'\n'}그들을 무대 위로 떠나 보냅니다. 
      </MobileTextBox>
    </Container>
  );
}

export default Director;