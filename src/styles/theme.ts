const theme = {
  font: {
    family: 'system-ui, Avenir, Helvetica, Arial, sans-serif'
  },
  colors: {
    background: '#fff',
    primary: '#2563EB',
    secondary: '#E2E8F0',
    text: '#1A202C',
    error: '#E53E3E',
    border: '#e2e8f0',
  },
  space: [0, 4, 8, 12, 16, 20, 24, 32],
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem'
  },
  radii: {
    sm: '4px',
    md: '8px',
  },
};

export default theme;


declare module 'styled-components' {
  export interface DefaultTheme {
    font: typeof theme.font;
    colors: typeof theme.colors;
    spacing: typeof theme.spacing;
    radii: typeof theme.radii;
  }
}