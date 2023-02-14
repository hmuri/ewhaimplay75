import React from 'react';
import styled, { keyframes } from 'styled-components';

const popUp = transPosition => keyframes`
  0% {
    transform: scale(0);
    transform: translate(0, 0);
    opacity:0;
  }
  100% {
    transform: scale(1);
    opacity:1;
    transform:translate(${transPosition.x},${transPosition.y})
  }ㅌㄹㄹ
`;

const SpaceButton = styled.button`
  visibility: hidden;
  position: absolute;
  width: 3rem;
  height: 3rem;
  transform: translate(0, 0);
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 3.5rem 3.5rem;
  background-image: url('${props => props.bgImg}');
  box-shadow: 3px 3px 10px #091A33;
  &.active {
    z-index: 2;
    animation: ${props => popUp(props.transPosition)} 0.3s both ease-in;
    animation-delay: ${props => props.delay};
    visibility: visible;
    opacity: 1;
  }
`;

function SpaceBtn({ isActive, delay, transPosition, innerContents }) {
  const goSpace = () => {
    window.open(innerContents.url, "_blank");
  };

  return (
    <SpaceButton
      className={isActive ? 'active' : ''}
      onClick={goSpace}
      transPosition={transPosition}
      delay={delay}
      bgImg={'/images/icons/icon-' + innerContents.title + '.png'}
    >
    </SpaceButton>
  );
}
export default SpaceBtn;