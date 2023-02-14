import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width:100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.mobile} {
    padding-top: 4rem;
  }
`

const MiddleContainer = styled.div`
  height: 27rem;
  display:flex;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.mobile} {
    flex-direction: column;
    align-items: center;
  }
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
`

const GreyImageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${props => props.theme.mobile} {
    height: 20rem;
  }
`

const NavImage = styled(NavLink)`
  height: 32%;
  object-fit: contain;
  margin-right: 0.35rem;
  cursor: pointer;
  -webkit-filter: grayscale(100%);
  -webkit-transition: .5s ease-in-out;
  -moz-filter: grayscale(100%); 
  -moz-transition: .5s ease-in-out;
  -o-filter: grayscale(100%); 
  -o-transition: .5s ease-in-out;
  :hover {
    -webkit-filter: grayscale(0%);
    -webkit-transition: .5s ease-in-out;
    -moz-filter: grayscale(0%);
    -moz-transition: .5s ease-in-out;
    -o-filter: grayscale(0%);
    -o-transition: .5s ease-in-out;
  }
`

const GreyImage = styled.img`
  height: 100%;
  object-fit: contain;
  border: solid #ffffff 0.01rem;
`

const MainImageContainer = styled.div`
`

const Poster = styled.img`
    height: 27rem;
    border: solid #ffffff 0.01rem;
   
    @media ${props => props.theme.mobile} {
      height: 20rem;
    }
`

const RightBox = styled.div`
    display:flex;
    width: 25rem;
    height: 100%;
    flex-direction : column;
    justify-content: space-between;
    margin-left: 3rem;

    @media ${props => props.theme.mobile} {
      margin: 0;
      width: 70vw;
    }
`

const ScriptBox = styled.div`
    font-size: 1.3rem;
    font-weight: 100;
    color: #ffffff;
    margin-top: 2rem;
    font-style: italic;

    @media ${props => props.theme.mobile} {
      margin-top: 2rem;
      font-size: 1.1rem;
      font-weight: 100;
      margin-bottom: 2rem;
    }
`

const BottomBox = styled.div`
`

const NameContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

const NameBox = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Pretendard';
`

const CastBox = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  font-family: 'Pretendard';
  margin-left: 0.5rem;
`

const DetailBox = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  margin-top: 2rem;
`

function Castingboard() {
    const characters = [
      {
        nameEN:'pierre',
        nameKR: '피에르',
        cast: '오다은', 
        text: '\n누구에게나 일어나는 일이야.\n하지만 이제 다시 일어날 시간이야.\n',
        detail: '니콜라의 아버지.\n안느를 떠나 소피아와 새 가정을 이루었다.\n늘 명백하기만 하던 삶이 니콜라로 인해 흔들린다.'
      },
      {
        nameEN:'nicolas',
        nameKR: '니콜라',
        cast: '김이채', 
        text: '\n결국 나를 위한 자리가 없어.\n가끔, 난 살기 위해 만들어지지 않은 것 같아.\n',
        detail: '어두우 시기를 살아가는 아이.\n어느 순간부터 고통에 갇혀\n삶의 모든 것이 의미 없게만 느껴진다.'
      },
      {
        nameEN:'anne',
        nameKR: '안느',
        cast: '장세영', 
        text: '\n그 시절에 내가 걔를 그렇게 불렀던 기억이 나.\n\'내 작은 태양\'이라고.\n',
        detail: '니콜라의 어머니.\n사랑하는 것들이 자꾸만 자신을 떠나가는 것 같아 두렵다.'
      },
      {
        nameEN:'sopia',
        nameKR: '소피아',
        cast: '오현지', 
        text: '\n가끔 질문하지 않는 걸 받아들여야 해.\n나아가는 것에 만족해야만 해...\n너무 생각하지 말고.\n',
        detail: '피에르의 아내.\n사랑하는 피에르의 부탁으로 니콜라와의 동거를 받아들인다.'
      }
    ]

    const {name} = useParams();
    const isClicked = characters.filter(person => person.nameEN === name);
    const others = characters.filter(person => person.nameEN !== name);

  return (
    <Container>
      <MiddleContainer>
        <ImageContainer>
            <GreyImageContainer>
              {others.map((person) => (
                <NavImage exact to= {"/info-play/casting-board/" + person.nameEN}>
                  <GreyImage key={person.nameEN} src={'/images/profiles/' + person.nameEN + '1.jpg'}/>
                </NavImage>
              ))}
            </GreyImageContainer>
            <MainImageContainer>
                <Poster src={'/images/profiles/' + name + '1.jpg'}/>
            </MainImageContainer>
        </ImageContainer>
        <RightBox>
            <ScriptBox>
                “{isClicked[0].text.split('\n').map(line => { return (<span>{line}<br /></span>) })}”
            </ScriptBox>
            <BottomBox>
              <NameContainer>
                <NameBox>{isClicked[0].nameKR}</NameBox>
                <CastBox>| {isClicked[0].cast} |</CastBox>
              </NameContainer>
                <DetailBox>{isClicked[0].detail.split('\n').map(line => { return (<span>{line}<br /></span>) })}</DetailBox>
            </BottomBox>
        </RightBox>
      </MiddleContainer>
    </Container>
  );
}

export default Castingboard;