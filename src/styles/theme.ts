export const theme = {
  colors: {
    primary: '#FF6B9D',
    primaryDark: '#E55688',
    secondary: '#4ECDC4',
    accent: '#FFE66D',
    bg: '#FFF8F3',
    surface: '#FFFFFF',
    text: '#2D3748',
    textLight: '#718096',
    border: '#E2E8F0',
    success: '#48BB78',
    warning: '#ED8936',
    danger: '#F56565',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.1)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 25px rgba(0,0,0,0.15)',
  },
}

export type Theme = typeof theme
