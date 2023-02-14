import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:100%;
  display:flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${props => props.theme.tablet} {
    margin-top: 9rem;
  }

  @media ${props => props.theme.mobile} {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 7rem;
    background-color: #172F53;
    margin-top: 180%;
  }
`

const MobilePoster = styled.img`
  display: none;

  @media ${props => props.theme.mobile} {
    display: flex;
    width: 16rem;
    margin-bottom: 2rem;
  }
`

const LeftBox = styled.div`
  width : 27rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.mobile} {
    align-items: center;
    width: 85%
  }
`

const TitleText = styled.div`
  font-size : 1.3rem;
  font-weight: 700;
  color: #ffffff;
  white-space: pre-wrap;
  line-height: 180%;
  margin-bottom: 2rem;

  @media ${props => props.theme.mobile} {
    font-size : 1.15rem;
  }
`

const SynopText = styled.div`
  white-space: pre-wrap;
  color: #ffffff;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 150%;
`

const InfoBox = styled.div`
  width: 100%;
  height: 10rem;
  background: linear-gradient(to right, #172F54, #1D1D1B);
  margin: 2rem auto;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  @media ${props => props.theme.mobile} {
    justify-content: center;
    align-items: flex-start;
    align-items: center;
    padding : 0 1rem;
    width: 95%;
  }
`

const InsideBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`

const InfoBoxLine = styled.div`
  display:flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`

const InfoTitle = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  width: 7rem;
  padding-left: 4rem;

  @media ${props => props.theme.mobile} {
    padding-left: 0;
  }
`

const InfoDetail = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 0.8rem;
  white-space: pre-wrap;
`

const BottomText = styled.div`
  white-space: pre-wrap;
  color: #ffffff;
  font-weight: 100;
  font-size: 0.8rem;
  line-height: 150%;
  opacity : 0.7;
`


const Poster = styled.img`
  width: 22rem;

  @media ${props => props.theme.mobile} {
    display: none;
  }
`

function Introduction() {
  return (
    <Container>
      <LeftBox>
        <TitleText>뜨지 못하는 태양,{'\n'}그리고 그 그림자에 놓인 사람들의 이야기</TitleText>
        <MobilePoster src={'/images/posters/75.jpg'}/>
        <SynopText>삶의 어둠 속에서 살아가는 아이, 니콜라는{'\n'}엄마 안느의 곁을 떠나{'\n'}소피아와 새로운 가정을 꾸린 아빠 피에르의 집에서{'\n'}볕으로 나아갈 방법을 찾고자 한다.{'\n\n'}하지만 삶이 명백하기만 한 피에르 그리고 새로운 가족{'\n'}소피아와의 동거는 니콜라를 또다른 길목으로 내모는데...</SynopText>
        <InfoBox>
          <InsideBox>
            <InfoBoxLine>
              <InfoTitle>공연 일시</InfoTitle>
              <InfoDetail>2023년 3월 9일 19시 30분{'\n'}2023년 3월 10일 19시 30분{'\n'}2023년 3월 11일 14시, 19시</InfoDetail>
            </InfoBoxLine>
            <InfoBoxLine>
              <InfoTitle>공연 장소</InfoTitle>
              <InfoDetail>이화여자대학교 생활환경관 소극장</InfoDetail>
            </InfoBoxLine>
            <InfoBoxLine>
              <InfoTitle>러닝 타임</InfoTitle>
              <InfoDetail>약 110분 (*인터미션 없음)</InfoDetail>
            </InfoBoxLine>
          </InsideBox>
        </InfoBox>
        <BottomText>본 공연은 지만지 및 프랑스 제작사로부터{'\n'}‘아들(The Son)’에 대한 정식 라이센스를 취득하였습니다.</BottomText>
      </LeftBox>
      <Poster src={'/images/posters/75.jpg'}/>
    </Container>
  );
}

export default Introduction;