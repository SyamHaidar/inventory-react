const BUTTON = {
  main: '32px',
  small: '26px',
  medium: '40px',
  large: '48px',
}

const ROUNDED = {
  main: '12px',
  form: '10px',
  small: '6px',
  full: '9999px',
}

const SCREEN = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
}

const size = {
  blur: 'blur(8px)',
  button: { ...BUTTON },
  font: '16px',
  rounded: { ...ROUNDED },
  screen: { ...SCREEN },
}

export default size
