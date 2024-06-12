import { extendTheme } from '@chakra-ui/react';
import { styleToken } from '@/shared';

export const customTheme = extendTheme({
  colors: {
    gray: {
      border: `${styleToken.color.gray200}`,
      background: `${styleToken.color.white}`,
      backgroundHover: `${styleToken.color.gray100}`,
    },
  },
});
