const colors = {
  white: '#fff',
  black: '#222',
  gray100: '#f7f7f7',
  gray200: '#E3E3E3',
  gray300: '#C7C7C7',
  gray400: '#707070',
  gray500: '#262626',
  gray600: '#131313',
  shadow: 'rgba(0, 0, 0, 0.25)',
  background: '#f1f4f8',
  red: '#ff5757',
  naver: '#03C75A',
  kakao: '#FEE500',
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
