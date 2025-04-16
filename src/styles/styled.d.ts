import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      error: string;
    };
    space: number[]; // Changed from readonly array
    radii: {
      sm: string;
      md: string;
    };
  }
}