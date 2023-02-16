import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:100%;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
`

const LeftBox = styled.div`
  width : 27rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media ${props => props.theme.tablet} {
    width : 20%;
    display: none;
  }
`

const TitleText = styled.div`
  font-size : 1.3rem;
  font-weight: 700;
  color: #ffffff;
  white-space: pre-wrap;
  line-height: 150%;
  margin-bottom: 2rem;
  @media ${props => props.theme.tablet} {
    display: none;
  }
`

const SynopText = styled.div`
  white-space: pre-wrap;
  color: #ffffff;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 150%;
  @media ${props => props.theme.tablet} {
    display: none;
  }
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
  @media ${props => props.theme.tablet} {
    display: none;
  }
`

const InfoBoxLine = styled.div`
  display:flex;
  align-items: flex-start;
  @media ${props => props.theme.tablet} {
    display: none;
  }
`

const InfoTitle = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  width: 7rem;
  padding-left: 4rem;
  @media ${props => props.theme.tablet} {
    display: none;
  }
`

const InfoDetail = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 0.8rem;
  white-space: pre-wrap;
  @media ${props => props.theme.tablet} {
    display: none;
  }
`

const BottomText = styled.div`
  white-space: pre-wrap;
  color: #ffffff;
  font-weight: 100;
  font-size: 0.8rem;
  line-height: 150%;
  opacity : 0.7;
  @media ${props => props.theme.tablet} {
    display: none;
  }
`


const Poster = styled.img`
  width: 22rem;
  @media ${props => props.theme.tablet} {
    display: none;
  }
`
const LeftBox_ = styled.div`
  display:none;
  @media ${props => props.theme.tablet} {
  width : 97%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  }
`
const RightBox_ = styled.div`
  display:none;
  @media ${props => props.theme.tablet} {
  width : 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  }
`

const TitleText_ = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
  display: flex;
  text-align: center;
  font-size : 1.1rem;
  font-weight: 600;
  margin: 1.5rem auto;
  color: #ffffff;
  white-space: pre-wrap;
  line-height: 150%;
  padding-top: 3rem;

  }
`

const SynopText_ = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
  display: flex;
  white-space: pre-wrap;
  color: #ffffff;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 150%;
  }
`

const InfoBox_ = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
  display:flex;
  width: 16rem;
  height: 100%;
  background: linear-gradient(to right, #172F54, #1D1D1B);
  margin: auto auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  }
`

const InfoBoxLine_ = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
  display:flex;
  align-items: flex-start;
  }
`

const InfoTitle_ = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
  display: flex;
  color: #ffffff;
  font-weight: 550;
  font-size: 1rem;
  width: 7rem;
  padding-left: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 0.7rem;
  }
`

const InfoDetail_ = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
  display: flex;
  color: #ffffff;
  font-weight: 350;
  font-size: 0.5rem;
  white-space: pre-wrap;
  padding-left: 2rem;
  padding-right: 0.8rem;
  padding-bottom: 1rem;
  line-height: 160%;
  }
`

const BottomText_ = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
  display: flex;
  white-space: pre-wrap;
  color: #ffffff;
  font-weight: 100;
  font-size: 0.6rem;
  line-height: 150%;
  opacity : 0.7;
  padding-top: 1.5rem;
  }
`


const Poster_ = styled.img`
  display: none;
  @media ${props => props.theme.tablet} {
  display: flex;
  width: 16rem;
  }
`

function Introduction() {
  return (
    <Container>
      <LeftBox>
        <TitleText>뜨지 못하는 태양,{'\n'}그리고 그 그림자에 놓인 사람들의 이야기</TitleText>
        <SynopText>삶의 어둠 속에서 살아가는 아이, 니콜라는 엄마 안느의 곁을 떠나{'\n'}소피아와 새로운 가정을 꾸린 아빠 피에르의 집에서{'\n'}볕으로 나아갈 방법을 찾고자 한다.{'\n\n'}하지만 삶이 명백하기만 한 피에르 그리고 새로운 가족{'\n'}소피아와의 동거는 니콜라를 또다른 길목으로 내모는데...</SynopText>
        <InfoBox>
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
        </InfoBox>
        <BottomText>본 공연은 지만지 및 프랑스 제작사로부터{'\n'}‘아들(The Son)’에 대한 정식 라이센스를 취득하였습니다.</BottomText>
      </LeftBox>
      <Poster src={'/images/posters/75.jpg'}/>
      <LeftBox_>
        <TitleText_>뜨지 못하는 태양,{'\n'}그리고 그 그림자에 놓인 사람들의 이야기</TitleText_>
        <SynopText_></SynopText_>
        <RightBox_>
          <Poster_ src={'/images/posters/75.jpg'}/>
          <InfoBox_>
              <InfoTitle_>공연 일시</InfoTitle_>
              <InfoDetail_>2023년 3월 9일 {'\n'}19시 30분{'\n'}2023년 3월 10일 {'\n'}19시 30분{'\n'}2023년 3월 11일 {'\n'}14시, 19시</InfoDetail_>
              <InfoTitle_>공연 장소</InfoTitle_>
              <InfoDetail_>이화여대 생활환경관 소극장</InfoDetail_>
              <InfoTitle_>러닝 타임</InfoTitle_>
              <InfoDetail_>약 110분 {'\n'}(*인터미션 없음)</InfoDetail_>
          </InfoBox_>
        </RightBox_>
        <BottomText_>본 공연은 지만지 및 프랑스 제작사로부터{'\n'}‘아들(The Son)’에 대한 정식 라이센스를 취득하였습니다.</BottomText_>
      </LeftBox_>
  </Container>
  );
}

export default Introduction;