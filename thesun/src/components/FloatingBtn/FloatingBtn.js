import { React, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import SpaceBtn from './SpaceBtn';

const popUp = keyframes`
  0% {
    transform: scale(0);
    transform: translate(-50%, 4rem);
    opacity:0;
  }
  100% {
    transform: scale(1);
    transform:translate(-50%, 0);
    opacity:1;
  }
`;

const FloatBtnWrapper = styled.div`
  display: none;

  @media ${props => props.theme.tablet} {
    display: flex;
    position: fixed;
    bottom: 2rem;
    right: 0;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: #fff;
    transform-origin: center center;
    animation: ${popUp} 0.2s both ease-in;
    box-shadow: 3px 3px 10px #091A33;
  }
`

const FloatButton = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  outline: none;
  cursor: pointer;
`

function FloatingBtn() {
  const [isActive, setIsActive] = useState(false);

  const onTransfrom = () => {
    setIsActive(!isActive);
  };

  const positionTable = [
    { x: '-16.8rem', y: '0.2rem' },
    { x: '-12.6rem', y: '0.2rem' },
    { x: '-8.4rem', y: '0.2rem' },
    { x: '-4.2rem', y: '0.2rem' },
  ]

  const innerContents = [
    {
      'title' : 'kakaotalk',
      'url' : 'https://open.kakao.com/o/sljJW73e',
    },
    {
      'title' : 'form',
      'url' : 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSexZWV5BX_feGKzQ6924aWsEiSdME3hRu7tjmfN1939eeXe1A/closedform',
    },
    {
      'title' : 'twitter',
      'url' : 'https://twitter.com/ewha_implay',
    },
    {
      'title' : 'instagram',
      'url' : 'https://www.instagram.com/ewha_implay/',
    }
  ]

  return (
    <FloatBtnWrapper>
      {positionTable.map((pos, idx) => (
          <SpaceBtn
            isActive={isActive}
            key={'content-' + idx}
            delay={`${idx / 10}s`}
            transPosition={pos}
            innerContents={innerContents[idx]}
          />
      ))}
      <FloatButton
          isActive={isActive}
          onClick={onTransfrom}
        >
        </FloatButton>
    </FloatBtnWrapper>
  );
}

export default FloatingBtn;