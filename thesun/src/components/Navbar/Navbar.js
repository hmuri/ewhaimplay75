import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import TableList from './TableList';

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
    fixed:0;
`

const Logo = styled.div`
    font-size: 1.7rem;
    font-family: 'Spoqa-Han-Sans';
    font-weight: 700;
    color: #172F53;
    cursor: pointer;
    margin : 2rem auto;
    text-decoration: none;
`

const HorizontalLine = styled.div`
    display: ${props => props.isActive == true ? 'flex' : 'none'};
    width: 7.5rem;
    height: 0.1rem;
    background-color: #172F53;
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
        </NavLink>
        <HorizontalLine isActive={!location.includes('info-implay')}/>
        {tableItems.map((item) => (
            <TableList key={item.page} location={location} page={item.page} title={item.title} elements={item.elements}/>
        ))}
    </Container>
  );
}

export default Navbar;

{/* <NavLink exact to="/">
          <Logo src={logo} />
        </NavLink>
        <TabContainer>
          <TabElem exact to="/" isActiveNav={location === '/'}>
            main
          </TabElem>
          <Star src={star} />
          <TabElem to="/category/0" isActiveNav={location.includes('category')}>
            category
          </TabElem>
          <Star src={star} />
          <TabElem exact to="/mymotiiv" isActiveNav={location === '/mymotiiv'}>
            mymotiiv
          </TabElem>
        </TabContainer> */}