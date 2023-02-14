import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color:#ffffff;
  
  @media ${props => props.theme.mobile} {
    font-size: 1.1rem;
  }
`

function Goods() {
  return (
    <Container>
      굿즈는 예매 폼 오픈과 함께 공개됩니다.
    </Container>
  );
}

export default Goods;