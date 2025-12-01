// Colores principales
export const COLORS = {
  primary: '#646cff',
  secondary: '#535bf2',
  gradient: {
    start: '#667eea',
    end: '#764ba2'
  },
  text: {
    primary: '#333',
    secondary: '#666',
    light: '#999'
  },
  background: {
    white: '#ffffff',
    light: '#f8f9fa',
    dark: '#2c3e50'
  }
} as const;

// Breakpoints para responsive
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1280
} as const;

// Duraciones de animación
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500
} as const;

// Z-index layers
export const Z_INDEX = {
  modal: 1000,
  header: 900,
  dropdown: 800,
  overlay: 700
} as const;

// Espaciado
export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '3rem',
  xxl: '5rem'
} as const;

// Mensajes de formulario
export const FORM_MESSAGES = {
  required: 'Este campo es requerido',
  invalidEmail: 'Email inválido',
  success: '¡Mensaje enviado exitosamente!',
  error: 'Ocurrió un error. Por favor intenta de nuevo.'
} as const;

// URLs de redes sociales (placeholder)
export const SOCIAL_LINKS = {
  github: 'https://github.com/AstridAzu',
  linkedin: 'https://www.linkedin.com/in/azucena-polo-723196335/',
  twitter: 'https://twitter.com/tu-usuario',
  email: 'tu.email@ejemplo.com'
} as const;
