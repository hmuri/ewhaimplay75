import { React, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    text-align : center;
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    margin-top : 2rem;
    white-space: pre-wrap;
`

const IMGBox = styled.div`
    width: 12rem !important;
    height: 18rem;
`

const PosterIMG = styled.img`
    width: 100%;
    height: 100%;
`

const Blackcard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity : 0.8;
`

const TextBox = styled.div`
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
    color: white;
    white-space: pre-wrap;
    line-height: 150%;
`

function Poster({id, title, imageUri, text}) {
  const [isHovering, setIsHovering] = useState(0);

  return (
    <Container>
        <IMGBox
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
        >
            <PosterIMG src={imageUri}/>
            {isHovering ? (
            <Blackcard>
                <TextBox>
                {text.split('\n').map(line => { return (<span>{line}<br /></span>) })}
                </TextBox>
            </Blackcard>
            ): ''}
        </IMGBox>
        <Title>{id}기{'\n'}{'<'}{title}{'>'}</Title>
    </Container>
  );
}

export default Poster;