import { extendTheme } from '@chakra-ui/react';
import { styleToken } from '@/shared';

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: {
          bg: `${styleToken.color.white}`,
          color: `${styleToken.color.gray500}`,
          _hover: {
            bg: `${styleToken.color.gray100}`,
          },
        },
        highlight: {
          bg: `${styleToken.color.red}80`,
          color: `${styleToken.color.red}`,
          _hover: {
            bg: `${styleToken.color.red}`,
          },
        },
      },
    },
  },
});

export default theme;
