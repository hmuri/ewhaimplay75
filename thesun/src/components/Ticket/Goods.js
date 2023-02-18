import React from 'react';
import styled from 'styled-components';
import MdBig from '../../assets/images/Ticket/MdBig.jpeg';
import MdSmall from '../../assets/images/Ticket/MdSmall.jpeg';



const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color:#ffffff;
  align-items: center;
  flex-direction: column;

`
const IMGBOx_Big = styled.img`
    width: 70%;
    margin-bottom: 1rem;
    
    @media ${props => props.theme.mobile} {
      display:none;
    }
`
const IMGBOx_Small = styled.img`
    display:none;
    
    @media ${props => props.theme.mobile} {
      display:flex;
      width: 85%;
      margin-bottom: 1rem;
    }
`
const TitleBox = styled.div`
    font-weight: 700;
    font-size: 2rem;
    color: #ffffff;
    white-space: pre-wrap;
    text-align:center;
    line-height: 170%;
    margin-top: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;

    @media ${props => props.theme.mobile} {
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }
`


function Goods() {
  return (
    <Container>
      <TitleBox onClick={() => window.open('https://forms.gle/hAG8GidzEqzwxt6G7', "_blank")}><u>*예매폼 바로가기*</u></TitleBox>
      <IMGBOx_Big src={MdBig}/>
      <IMGBOx_Small src={MdSmall}/>
    </Container>
  );
}

export default Goods;