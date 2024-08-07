const colors = {
  white: '#ffffff',
  black: '#222222',
  gray100: '#F7F7F7',
  gray200: '#E3E3E3',
  gray300: '#C7C7C7',
  gray400: '#707070',
  gray500: '#262626',
  gray600: '#131313',
  noteList: '#909090',
  shadow: '#0000003F',
  background: '#F1F4F8',
  hover: '#F7F7F7',
  error: '#FF003E',
  naver: '#03C75A',
  kakao: '#FEE500',
  blue: '#2284F5',
  hoverBlue: '#207BE3',
} as const;

const fontSize = {
  h1: '22px',
  h2: '20px',
  h3: '18px',
  h4: '16px',
  h5: '14px',
  subtitle1: '15px',
  subtitle2: '13px',
  body1: '15px',
  body2: '13px',
} as const;

const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

const spacing = {
  mt10: '2.5rem',
  mt20: '5rem',
  mt30: '7.5rem',
  mt40: '10rem',
  mt50: '12.5rem',
  mb10: '2.5rem',
} as const;

const width = {
  w100: '100%',
  w75: '75%',
  w50: '50%',
  w25: '25%',
  w15: '15%',
} as const;

export const zIndex = {
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700,
  loading: 1800,
} as const;

export const styleToken = {
  color: colors,
  fontSize,
  fontWeight,
  spacing,
  width,
  zIndex,
} as const;
