import React from 'react';
import styled from 'styled-components';
import Alert from '../../assets/images/Ticket/alert.png';

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.mobile} {
    padding-bottom: 5rem;
    background-color: #172F53;
  }
`

const UpperBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${props => props.theme.mobile} {
    width: 90%;
    flex-direction : column;
    margin: 25rem 0 2rem;
  }
`

const ImgBox = styled.div`
  width: 12rem;
  height: 12rem;
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.mobile} {
    width: 15rem;
  }
`

const AlertImg = styled.img`
  width: 80%;
  @media ${props => props.theme.mobile} {
    width: 55%;
  }
`

const AlertText = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
  white-space: pre-wrap;
  text-align: center;
`

const TextBox = styled.div`
  white-space: pre-wrap;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 400;

  @media ${props => props.theme.mobile} {
    width: 90%;
    line-height: 180%;
  }
`

const BottomBox = styled.div`
  width: 80%;
  background-color: #1F4060;
  padding: 2rem;

  @media ${props => props.theme.mobile} {
    width: 80%;
    padding: 2rem 1rem;
  }
`

const BottomTitleText = styled.div`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;

  @media ${props => props.theme.mobile} {
    font-size: 1rem;
  }
`

const BottomContentsText = styled.ul`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 2rem;

  @media ${props => props.theme.mobile} {
    font-size: 0.9rem;

    >li {
      margin: 0.5rem 0;
    }
  }
`

const MaskNotice = styled.div`
  white-space: pre-wrap;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 100;

  @media ${props => props.theme.tablet} {
    margin-top: 2rem;
  }
`

function Caution() {
  return (
    <Container>
        <UpperBox>
            <ImgBox>
                <AlertImg src={Alert}/>
                <AlertText>트라우마 자극 주의{'\n'}(Trigger Warning)</AlertText>
            </ImgBox>
            <TextBox>※ 본 공연은 우울을 소재로 다루는 극으로, 일부 폭력, 자해 및 죽음과 관련된 장면이 포함되어 있습니다.{'\n'}공연 관람에 불편이 있을 수 있으니 예매 시 유의해주시기 바랍니다.</TextBox>
        </UpperBox>
        <BottomBox>
            <BottomTitleText>티켓 박스 안내</BottomTitleText>
            <BottomContentsText>
                <li>티켓 및 MD 배부는 공연 1시간 전부터 극장 앞 티켓 박스에서 이루어집니다.</li>
                <li>좌석은 공연 당일 티켓 배부 시 “선착순”으로 선택 가능합니다.</li>
                <li>당일 잔여석 및 잔여 MD에 한하여 공연 시작 00분 전까지 현장 예매가 가능합니다.</li>
                <li>회차별 잔여석은 사이트의의 [좌석 정보] 탭 또는 당일 티켓 부스에서 확인 가능합니다.</li>
            </BottomContentsText>
            <BottomTitleText>무통장 입금 시</BottomTitleText>
            <BottomContentsText>
                <li>입금자명과 주문자명을 동일하게 입력해주시기 바랍니다.</li>
                <li>결제 금액을 정확히 입력해야 합니다.</li>
            </BottomContentsText>
            <MaskNotice>
                * 정부의 ‘실내 마스크 착용 의무 조정안’에 따라 공연장 내 마스크 착용이 ‘의무’에서 ‘권고’ 사항으로 변경되었습니다.{'\n'}* 정부 방역 지침에 따라 관람 수칙이 변경될 수 있사오니 이 점 양해 부탁드립니다.
            </MaskNotice>
        </BottomBox>
    </Container>
  );
}

export default Caution;