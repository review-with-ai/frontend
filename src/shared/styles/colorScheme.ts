import { extendTheme } from '@chakra-ui/react';
import { styleToken } from '@/shared/styles/styleToken';

export const customTheme = extendTheme({
  colors: {
    gray: {
      border: `${styleToken.color.gray200}`,
      background: `${styleToken.color.white}`,
      backgroundHover: `${styleToken.color.gray100}`,
    },
    active: {
      border: 'none',
      background: `${styleToken.color.blue}`,
      backgroundHover: `${styleToken.color.hoverBlue}`,
    },
    alert: {
      border: 'none',
      background: `${styleToken.color.blue}`,
      backgroundHover: `${styleToken.color.hoverBlue}`,
    },
  } as const,
});
