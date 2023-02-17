import React from 'react';
import styled from 'styled-components';
import ExampleIMG from '../../assets/images/Ticket/ticket_real.png';

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media ${props => props.theme.mobile} {
    background-color: #172F53;
  }
`

const TitleBox = styled.div`
    font-weight: 700;
    font-size: 2rem;
    color: #ffffff;
    white-space: pre-wrap;
    text-align:center;
    line-height: 170%;
    cursor: pointer;

    @media ${props => props.theme.mobile} {
        font-size: 1.8rem;
    }
`


const MiddleBox = styled.div`
    display:flex;
    margin: 3rem auto;

    @media ${props => props.theme.mobile} {
        flex-direction: column;
        margin: 0 0 3rem;
        justify-content: center;
        align-items: center;
    }
`

const MiddleContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 25rem;


    @media ${props => props.theme.mobile} {
        margin-top : 2rem;
        width: 90%;
    }
`

const LeftIMGBOx = styled.img`
    width: 22rem;
    margin-bottom: 1rem;

    @media ${props => props.theme.mobile} {
        width: 100%;
    }
`

const LeftTextBox = styled.div`
    font-weight: 100;
    font-size: 0.8rem;
    color: #ffffff;
`

const RightTitle = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    color: #ffffff;

    @media ${props => props.theme.mobile} {
        font-size: 1.2rem;
    }
`

const RightMiddle = styled.div`
    margin: 1.5rem 0;
    font-weight: 700;
    font-size: 1.3rem;
    color: #ffffff;
    white-space: pre-wrap;
    line-height: 200%;

    @media ${props => props.theme.mobile} {
        font-size: 1.1rem;
    }
`

const RightBottom = styled.div`
    font-weight: 100;
    font-size: 0.7rem;
    color: #ffffff;
    white-space: pre-wrap;
    line-height: 150%;
`

const BottomBox = styled.div`
    font-weight: 700;
    font-size: 3rem;
    color: #ffffff;
`

function Information() {
  return (
    <Container>
        <TitleBox onClick={() => window.open('https://forms.gle/hAG8GidzEqzwxt6G7', "_blank")}><u>*예매폼 바로가기*</u></TitleBox>
        <MiddleBox>
            <MiddleContainer style={{'alignItems' : 'center'}}>
                <LeftIMGBOx src={ExampleIMG}/>
                <LeftTextBox>티켓 디자인         [  앞면 / 뒷면  ]</LeftTextBox>
            </MiddleContainer>
            <MiddleContainer>
                <RightTitle>| 재관람 혜택 |</RightTitle>
                <RightMiddle>2회 관람 시 | 1000원 할인 or 굿즈 1종{'\n'}3회 관람 시 | 2000원 할인 or 굿즈 2종{'\n'}4회 관람 시 | 티켓 1매 추가 증정 </RightMiddle>
                <RightBottom>* 관람하신 공연의 티켓을 지참하신 경우에만 가능합니다.{'\n'}* 재관람 시 증정하는 MD는 현장에서 수령 가능합니다.{'\n'}* 재관람 시 적용되는 할인 혜택은 현장에서 페이백 해드립니다.</RightBottom>
            </MiddleContainer>
        </MiddleBox>
        <BottomBox>1매 6,000원</BottomBox>
    </Container>
  );
}
    export default Information;