import { createTheme } from '@kuma-ui/core';

const theme = createTheme({
  colors: {
    white: '#ffffff',
    black: '#000000',
    gray: '#94a3b8',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  components: {},
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme;
