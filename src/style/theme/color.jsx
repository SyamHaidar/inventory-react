const BRAND = {
  main: '#FF731D',
}

const PRIMARY = {
  light: '#e1e1e1',
  main: '#040303',
  dark: '#020101',
}

const BLUE = {
  lighter: '#D1E9FC',
  light: '#76B0F1',
  main: '#2065D1',
  dark: '#103996',
  darker: '#061B64',
}

const CYAN = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
}

const GREEN = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
}

const YELLOW = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
}

const RED = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
}

const TEXT_LIGHT = {
  primary: '#212B36',
  secondary: '#637381',
  disabled: '#919EAB',
  contrast: '#fff',
}

const TEXT_DARK = {
  primary: '#f5f7fe',
  secondary: '#637381',
  disabled: '#212B36',
  contrast: '#fff',
}

const SHADOW_LIGHT = {
  main: '0 0 2px rgba(145, 158, 171, 0.20), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
  top: '0 0 2px rgba(145, 158, 171, 0.20), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
  button: {
    brand: `0px 8px 16px 0px  ${BRAND.main}40`,
    primary: `0px 8px 16px 0px ${PRIMARY.main}40`,
  },
}

const SHADOW_DARK = {
  main: '0 0 2px rgba(0, 0, 0, 0.20) , 0 12px 24px -4px rgba(0, 0, 0, 0.12)',
  top: '0 0 2px rgba(0, 0, 0, 0.20) , 0 -12px 24px -4px rgba(0, 0, 0, 0.12)',
  button: {
    brand: `0px 8px 16px 0px ${BRAND.main}40`,
    primary: `0px 8px 16px 0px ${PRIMARY.main}40`,
  },
}

const light = {
  light: '#f2f3fe',
  blur: '#ffffffa6',
  canvas: '#ffffff',
  overlay: '#07080ccc',
  scrollbar: '#b4bcc3',
  border: '#dee7f4',
  contrast: '#16171a',
  paper: '#ffffff',
  text: { ...TEXT_LIGHT },
  shadow: { ...SHADOW_LIGHT },
}

const dark = {
  light: '#2a2b2e',
  blur: '#16171aa6',
  canvas: '#16171a',
  overlay: '#07080ccc',
  scrollbar: '#3c444b',
  border: '#343538',
  contrast: '#fff',
  paper: '#202124',
  text: { ...TEXT_DARK },
  shadow: { ...SHADOW_DARK },
}

const color = {
  brand: { ...BRAND },
  primary: { ...PRIMARY },
  blue: { ...BLUE },
  cyan: { ...CYAN },
  green: { ...GREEN },
  yellow: { ...YELLOW },
  red: { ...RED },
  ...dark,
  // ...light,
}

export default color
