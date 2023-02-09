import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #172F53;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1rem;
    color:#ffffff;
`

function NotFound() {
  return (
    <>
      <Container>
        길을 잃으셨군요. 하지만 걱정하지 마세요. 이건 단지 지나가는 시기일 뿐이에요.
      </Container>
    </>
  );
}

export default NotFound;