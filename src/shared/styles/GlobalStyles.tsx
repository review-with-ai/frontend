import { Global, css } from '@emotion/react';
import { styleToken } from '@/shared/styles';

export const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
          format('woff');
        font-weight: 400;
        font-style: normal;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${styleToken.color.white};
        margin: 0 auto;
        font-family: 'Pretendard-Regular', sans-serif;
      }
    `}
  />
);
