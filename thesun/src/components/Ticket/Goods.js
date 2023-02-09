import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1rem;
    color:#ffffff;
    margin-bottom: 5rem;
`

function Goods() {
  return (
    <Container>
      굿즈는 예매폼 오픈과 함께 공개됩니다.
    </Container>
  );
}

export default Goods;