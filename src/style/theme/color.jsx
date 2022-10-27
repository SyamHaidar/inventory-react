const BRAND = {
  main: '#FA4EAB',
  // main: '#F94892',
  // main: '#FF9F29',
  // main: '#1257ed',
  // main: '#0021ED',
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
  contrast: '#ffffff',
}

const TEXT_DARK = {
  primary: '#f5f7fe',
  secondary: '#637381',
  disabled: '#212B36',
  contrast: '#ffffff',
}

const SHADOW = {
  button: {
    brand: `0px 8px 16px 0px  ${BRAND.main}40`,
  },
}

const SHADOW_LIGHT = {
  main: '0 0 2px rgba(145, 158, 171, 0.20), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
  top: '0 0 2px rgba(145, 158, 171, 0.20), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
  ...SHADOW,
}

const SHADOW_DARK = {
  main: '0 0 2px rgba(0, 0, 0, 0.24) , 0 12px 24px -4px rgba(0, 0, 0, 0.24)',
  top: '0 0 2px rgba(0, 0, 0, 0.24) , 0 -12px 24px -4px rgba(0, 0, 0, 0.24)',
  ...SHADOW,
}

const light = {
  light: '#f2f3fe',
  blur: '#ffffffa6',
  canvas: '#ffffff',
  overlay: '#07080ccc',
  scrollbar: '#b6b7ba',
  border: '#dedfe2',
  contrast: '#16171a',
  paper: '#ffffff',
  text: { ...TEXT_LIGHT },
  shadow: { ...SHADOW_LIGHT },
}

const dark = {
  light: '#202124',
  blur: '#000000a6',
  canvas: '#000000',
  overlay: '#07080ccc',
  scrollbar: '#3e3f42',
  border: '#2a2b2e',
  contrast: '#ffffff',
  paper: '#16171a',
  text: { ...TEXT_DARK },
  shadow: { ...SHADOW_DARK },
}

const theme = localStorage.getItem('theme')

const color =
  theme === 'dark'
    ? {
        brand: { ...BRAND },
        blue: { ...BLUE },
        cyan: { ...CYAN },
        green: { ...GREEN },
        yellow: { ...YELLOW },
        red: { ...RED },
        ...dark,
      }
    : {
        brand: { ...BRAND },
        blue: { ...BLUE },
        cyan: { ...CYAN },
        green: { ...GREEN },
        yellow: { ...YELLOW },
        red: { ...RED },
        ...light,
      }

export default color
