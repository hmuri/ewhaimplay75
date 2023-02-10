import { React, useEffect } from 'react';
import styled from 'styled-components';
import './styles.css';

const Container = styled.div`
  width: 20rem;
  height: 14.5rem;
`

const MessageBox = styled.div`
  width: 3rem;
  height: 1.5rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`


const { kakao } = window;

function KakaoMap() {

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center : new kakao.maps.LatLng(37.56202879971982, 126.94413395989561),
      level : 3
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition  = new kakao.maps.LatLng(37.5617222859171, 126.94413294754823);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    marker.setMap(map);

    const content = '<div class="customoverlay">' +
    '  <a href="http://kko.to/OnYiVB_KjL" target="_blank">' +
    '    <span class="title">생활환경관 소극장</span>' +
    '  </a>' +
    '</div>';

    const position = new kakao.maps.LatLng(37.5617222859171, 126.9441329475482);  
    const customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1 
    });
  })
  

  return (
    <Container id="map">
    </Container>
  );
}

export default KakaoMap;