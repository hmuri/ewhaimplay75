import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #172F53;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1rem;
    color:#ffffff;
    white-space: pre-wrap;
    line-height: 200%;
    text-align: center;

    @media ${props => props.theme.tablet} {
      padding: 0 1.5rem;
    }
`

function NotFound() {
  return (
    <>
      <Container>
        니콜라,{'\n'}너 지금 혼자 길을 걷다가 여기까지 왔다는 소리야?{'\n'}말도 안 되는 소리야.{'\n'}사람들이 그걸 믿을 거라고 생각해?{'\n\n'}여긴 길이 없어. 다른 길로 돌아가. 협상 불가야.
      </Container>
    </>
  );
}

export default NotFound;