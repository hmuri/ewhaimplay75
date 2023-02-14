import React from 'react';
import styled from 'styled-components';
import CastingCard from './CastingCard';

const Container = styled.div`
  width:100%;
  height: 100%;
  background-color: #ffffff;
  display:flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.mobile} {
    background-color: #172F53;
    margin-top: 10rem;
    padding: 2rem 0;
  }
`

const LayoutContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.tablet} {
    display: none;
  }
`

const ImageContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.mobile} {
    height: 11rem;
    margin: 0rem;
  } 
`

const TabletImageContainer = styled.div`
  display: none;

  @media ${props => props.theme.tablet} {
    display: flex;
  }

  @media ${props => props.theme.mobile} {
    display: none;
  }
`

const TabletImageLine = styled.div`
`

const MobileImageContainer = styled.div`
  display: none;

  @media ${props => props.theme.mobile} {
    display: flex;
    flex-direction : row;
  }
`

const MobileImageLine = styled.div`
  @media ${props => props.theme.mobile} {
    display: flex;
    flex-direction : column;
  }
`

function CastingboardHome() {
  return (
    <Container>
      <LayoutContainer>
        <ImageContainer>
          <CastingCard nameEN={'pierre'} nameKR={'피에르'} marginBottom={'5rem'}/>
        </ImageContainer>
        <ImageContainer>
          <CastingCard nameEN={'nicolas'} nameKR={'니콜라'}/>
          <CastingCard nameEN={'anne'} nameKR={'안느'}/>
        </ImageContainer>
        <ImageContainer>
          <CastingCard nameEN={'sopia'} nameKR={'소피아'} marginBottom={'-5rem'}/>
        </ImageContainer>
      </LayoutContainer>

      <TabletImageContainer>
        <TabletImageLine>
          <CastingCard nameEN={'pierre'} nameKR={'피에르'} margin={'top'}/>
          <CastingCard nameEN={'nicolas'} nameKR={'니콜라'} margin={'bottom'}/>
        </TabletImageLine>
        <TabletImageLine>
          <CastingCard nameEN={'anne'} nameKR={'안느'} margin={'top'}/>
          <CastingCard nameEN={'sopia'} nameKR={'소피아'} marginBottom={'-5rem'} margin={'bottom'}/>
        </TabletImageLine>
        </TabletImageContainer>

      <MobileImageContainer>
        <MobileImageLine>
          <CastingCard nameEN={'pierre'} nameKR={'피에르'} margin={'top'}/>
          <CastingCard nameEN={'anne'} nameKR={'안느'} margin={'top'}/>
        </MobileImageLine>
        <MobileImageLine style={{'marginTop' : '3rem'}}>
          <CastingCard nameEN={'nicolas'} nameKR={'니콜라'} margin={'bottom'}/>
          <CastingCard nameEN={'sopia'} nameKR={'소피아'} marginBottom={'-5rem'} margin={'bottom'}/>
        </MobileImageLine>
        </MobileImageContainer>
    </Container>
  );
}

export default CastingboardHome;