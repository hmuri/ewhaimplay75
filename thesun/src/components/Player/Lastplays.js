import React from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import Poster from './Poster';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Lastplays() {

  const plays = [
    {
      id : 71,
      title: '미스 줄리',
      imageUri: '/images/posters/71.jpg',
      text: '원작 | 아우구스트 스트린드베리\n(August Strindberg)\n\n연출진 | 정다은, 이가인\n\n일시 | 2021.03.26~28\n(온라인 스트리밍)'
    },
    {
      id : 72,
      title: 'R&J',
      imageUri: '/images/posters/72.jpg',
      text: '원작 | 조 칼라코 (Joe Calarco)\n\n연출진 | 정승희, 김혜인\n\n일시 | 2021.11.05~07\n(온라인 스트리밍)'
    },
    {
      id : 73,
      title: '보도지침',
      imageUri: '/images/posters/73.jpg',
      text: '원작 | 오세혁\n\n연출진 | 이민서, 김혜인\n\n일시 | 2022.03.10~12\n\n장소 | 한성 아트홀'
    },
    {
      id : 74,
      title: '봄에는 자살 금지',
      imageUri: '/images/posters/74.jpg',
      text: '원작 | 알레한드로 카소나\n(Alejandro Casona)\n\n연출진 | 최시은, 오윤형\n\n일시 | 2022.09.06~08\n\n장소 | 이화여자대학교 소극장'
    },
    {
      id : 75,
      title: 'The Sun',
      imageUri: '/images/posters/75.jpg',
      text: '원작 | 플로리앙 젤레르\n(Florian Zeller)\n\n연출진 | 최민주, 오윤형\n\n일시 | 2023.3.09~11\n\n장소 | 이화여자대학교 소극장'
    }
  ];

  return (
    <Container>
      <Swiper
        id="swiper-plays"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {plays.map(play =>
          <SwiperSlide>
            <Poster key={play.id} id={play.id} title={play.title} imageUri={play.imageUri} text={play.text} />
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
}

export default Lastplays;
