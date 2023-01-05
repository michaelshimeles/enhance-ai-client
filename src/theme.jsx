// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export default extendTheme({
  config: {
    ...config,
    colors: {
      black: '#000000', // "#131416",
      white: '#FFFFFF',
    },
  },
});
