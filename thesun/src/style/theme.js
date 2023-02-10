const size = {
  desktop: '1150px',
};

const theme = {
  deepblue: '#172F53',
  lightblue: '#516AAC',

  // 브레이크 포인트
  mobile: `(max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;