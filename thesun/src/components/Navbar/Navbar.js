import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import TableList from './TableList';
import LogoHeader from '../../assets/images/logo-header.png';

const Container = styled.div`
    width: 11%;
    height: 100%;
    background-color: #ffffff;
    
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: fixed;
    top: 0;
    left:0;

    @media ${props => props.theme.mobile} {
        width: 100%;
        height: 5.5rem;
        background-color: #172F53;
    }
`

const Logo = styled.div`
    font-size: 1.7rem;
    font-weight: 700;
    color: #172F53;
    cursor: pointer;
    margin : 2rem auto;
    text-decoration: none;

    @media ${props => props.theme.mobile} {
        display: none;
    }
`

const MobileLogoBox = styled.div`
    display: none;

    @media ${props => props.theme.mobile} {
        display: flex;
        width: 100%;
        height: 3rem;
    }
`

const MobileLogoImg = styled.img`
    display: none;

    @media ${props => props.theme.mobile} {
        display: flex;
        width: 9rem;
        object-fit: contain;
    }
`

const HorizontalLine = styled.div`
    display: ${props => props.isActive == true ? 'flex' : 'none'};
    width: 7.5rem;
    height: 0.1rem;
    background-color: #172F53;

    @media ${props => props.theme.mobile} {
        display: none;
    }
`

const HorizontalNavbarContainer = styled.div`
    width: 100%;

    @media ${props => props.theme.mobile} {
        height: 2.5rem;
        
        display: flex;
        justify-content: space-evenly;
        background-color: #ffffff;

        position: absolute;
        bottom: 0;
      }
`

function Navbar({location}) {
    const tableItems = [
        {
            page: 'info-implay',
            title : '인문극회',
            elements : [{
                    page : '',
                    title : '극단 소개'
                },
                {
                    page : 'last-plays',
                    title : '이전 공연'
                }]
        },
        {
            page: 'info-play',
            title : '공연 정보',
            elements : [{
                page : '',
                title : '공연 소개'
            },
            {
                page : 'writer',
                title : '작가 소개'
            },
            {
                page : 'director-says',
                title : '기획 의도'
            },
            {
                page : 'casting-board',
                title : '캐스팅보드'
            }]
        },
        {
            page: 'info-ticket',
            title : '예매',
            elements : [
                {
                    page : '',
                    title : '티켓 안내'
                },
                {
                    page : 'goods',
                    title : 'MD 소개'
                },
                {
                    page : 'seats',
                    title : '좌석 정보'
                },
                {
                    page : 'notice',
                    title : '유의사항'
                }]
        },
        {
            page: 'info-route',
            title: '오시는 길',
            elements : []
        }
    ];

  return (
    <Container>
        <NavLink exact to="/" style={{'textDecoration' : 'none'}}>
            <Logo>THE SUN</Logo>
            <MobileLogoBox>
                <MobileLogoImg src={LogoHeader}/>
            </MobileLogoBox>
        </NavLink>
        <HorizontalLine isActive={!location.includes('info-implay')}/>
        <HorizontalNavbarContainer>
            {tableItems.map((item) => (
                <TableList key={item.page} location={location} page={item.page} title={item.title} elements={item.elements}/>
            ))}
        </HorizontalNavbarContainer>
    </Container>
  );
}

export default Navbar;