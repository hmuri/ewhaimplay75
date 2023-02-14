import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/Footer/implay-logo.png';

const LogoImage = styled.img`
    width: 10rem;
    border-left: solid 0.1rem white;
    border-right: solid 0.1rem white;
    margin-bottom: 2rem;

    @media ${props => props.theme.tablet} {
      width: 8rem;
    }
`

const PlayerIntroduction = styled.div`
    text-align: center;
    color: #ffffff;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    font-weight: 700;

    @media ${props => props.theme.tablet} {
      font-size: 1.2rem;
    }
`

const PlayerIntroductionSmall = styled.div`
    text-align: center;
    color: #ffffff;
    font-size: 1rem;
    white-space: pre-wrap;
    font-weight: 100;
    line-height: 180%;

    @media ${props => props.theme.tablet} {
      font-size: 0.8rem;
    }
`

function Introduction() {
  return (
    <>
      <LogoImage src={Logo}/>
      <PlayerIntroduction>“ 연극, 참전하는 모든 삶들을 위하여 ”</PlayerIntroduction>
      <PlayerIntroductionSmall><b>‘이화여자대학교 인문극회’</b>는{'\n'}이화여자학교 인문과학대학 소속연극 동아리입니다.{'\n'}인문극회는 1956년 ‘문리대 연극반’으로 시작하여{'\n'}매년 2회의 정기공연을 올리며 전통과 명맥을 이어오고 있습니다.{'\n\n'}“참전하는 모든 삶에게로 연극이 닿을 수 있기를”{'\n'}바라는 마음으로{'\n'}75기 부원들은 각자의 열정을 모으고 있습니다.</PlayerIntroductionSmall>
    </>
  );
}

export default Introduction;