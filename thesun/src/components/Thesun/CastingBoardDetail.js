import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width:100%;
  height: 100vh;
  margin-top: 5rem;
`

const MiddleContainer = styled.div`
  height: 27rem;
  display:flex;
  justify-content: center;
  align-items: flex-start;
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
`

const RightBox = styled.div`
    display:flex;
    width: 25rem;
    height: 100%;
    flex-direction : column;
    justify-content: space-between;
    margin-left: 3rem;
`

const ScriptBox = styled.div`
    font-size: 1.3rem;
    font-weight: 100;
    color: #ffffff;
    margin-top: 2rem;
`

const BottomBox = styled.div`

`

const NameBox = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
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
        text: '\n누구에게나 일어나는 일이야.\n하지만 이제 다시 일어날 시간이야.',
        detail: '니콜라의 아버지.\n안느를 떠나 소피아와 새 가정을 이루었다.\n늘 행복하기만 하던 삶이 니콜라로 인해 흔들린다.'
      },
      {
        nameEN:'nicolas',
        nameKR: '니콜라',
        text: '\n니콜라의 대사를 기다리고 있어요.',
        detail: '니콜라 설명 자리예요.\n아마 세 줄 정도 들어갈 거예요.\n블라블라'
      },
      {
        nameEN:'anne',
        nameKR: '안느',
        text: '\n안느의 대사를 기다리고 있어요.',
        detail: '안느 설명 자리예요.\n아마 세 줄 정도 들어갈 거예요.\n블라블라'
      },
      {
        nameEN:'sopia',
        nameKR: '소피아',
        text: '\n소피아의 대사를 기다리고 있어요.',
        detail: '소피아 설명 자리예요.\n아마 세 줄 정도 들어갈 거예요.\n블라블라'
      }
    ]

    const {name} = useParams();
    const isClicked = characters.filter(person => person.nameEN == name);
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
                <NameBox>{isClicked[0].nameKR}</NameBox>
                <DetailBox>{isClicked[0].detail.split('\n').map(line => { return (<span>{line}<br /></span>) })}</DetailBox>
            </BottomBox>
        </RightBox>
      </MiddleContainer>
    </Container>
  );
}

export default Castingboard;