import React from 'react';
import styled from 'styled-components';
import Hall from '../assets/images/Map/hall.png';
import KakaoMap from '../components/Map/KakaoMap.js';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.mobile} {
    height: 65vh;
    margin-top: 2rem;
  }
`

const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${props => props.theme.mobile} {
    align-items: center;
  }
`

const TitleText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #ffffff;
  margin-bottom: 1rem;

  @media ${props => props.theme.mobile} {
    align-items: center;
    margin-bottom: 2rem;
  }
`

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
`

const UpperBox = styled.div`
  display: flex;

  @media ${props => props.theme.mobile} {
    justify-content: center;
    align-items: center;
  }
`

const HallImg = styled.img`
  height: 14.5rem;
  object-fit: contain;
  margin-left: 1rem;

  @media ${props => props.theme.mobile} {
    display: none;
  }
`

const NoticeBox = styled.div`
  width: 95.5%;
  background-color: #1F4060;
  display:flex;
  flex-direction: column;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 1rem;
  padding: 1rem;

  > b{
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  @media ${props => props.theme.mobile} {
    width: auto;
    background-color: transparent;

    span:last-child{
      margin-top: 1rem;
    }
  }
`

const NoticeTitle = styled.div`
  border-bottom: solid 1px white;
  padding-bottom: 1rem;
  white-space: pre-wrap;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
`


function Map() {
  return (
    <>
      <Container>
        <InsideBox>
          <TitleText>
            <span style={{'fontWeight' : '700', 'fontSize' : '1.4rem', 'marginBottom' : '0.5rem'}}>이화여자대학교 생활환경관 소극장</span>
            <span style={{'fontWeight' : '400', 'fontSize' : '1.2rem'}}>서울특별시 서대문구 이화여대길 52</span>
          </TitleText>
          <BottomBox>
            <UpperBox>
              <KakaoMap/>
              <HallImg src={Hall}/>
            </UpperBox>
            <NoticeBox>
              <NoticeTitle>주차 안내</NoticeTitle>
                <b>주차장</b>
                <span>이화여자대학교 ECC 주차장</span>
                <b>주차권 안내</b>
                <span>이화여자대학교 ECC 주차장 4시간권 : 2000원</span>
                <span>* 해당 주차권은 공연 당일 티켓 박스에서 구매하실 수 있습니다.</span>
            </NoticeBox>
          </BottomBox>
        </InsideBox>
      </Container>
    </>
  );
}

export default Map;

{/*  */}