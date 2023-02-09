import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Hall from '../assets/images/Map/hall.png';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #172F53;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10rem;
`

const TitleText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #ffffff;
  margin: 2rem 0;
`

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
`

const UpperBox = styled.div`
  display: flex;
  height: 40%;
`

const KakaoMap = styled.div`
  width: 20rem;
  height: 100%;
  border: solid 1px white;
`

const HallImg = styled.img`
  height: 100%;
  object-fit: contain;
  margin-left: 1rem;
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
            <span style={{'fontWeight' : '700', 'fontSize' : '1.5rem', 'marginBottom' : '1rem'}}>이화여자대학교 생활환경관 소극장</span>
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