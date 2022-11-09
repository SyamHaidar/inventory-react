import { createGlobalStyle } from 'styled-components/macro'
import theme from './theme'

// ----------------------------------------------------------------------

export const RootStyle = createGlobalStyle`
  :root {
    --font-sans-serif: Public Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-monospace: Cascadia Mono, SFMono-Regular, Menlo, Monaco, Consolas,
        'Liberation Mono', 'Courier New', monospace;
    --shadow-default: 0 8px 16px rgba(32, 33, 36, 0.12);
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }

  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }

  html, body {
    background: ${theme.color.canvas};
  }

  body {
    margin: 0;
    color: ${theme.color.text.secondary};
    font-family: var(--font-sans-serif);
    font-size: ${theme.size.font};
    font-weight: 400;
    line-height: 1.4375;
    text-rendering: optimizeLegibility;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  /* h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  } */

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sora', sans-serif;
    font-size: inherit;
    font-weight: inherit;
  }

  ol, ul {
    list-style: none;
  }

  code, kbd, pre, samp {
    font-family: var(--font-monospace);
    unicode-bidi: bidi-override;
  }

  img, svg, video, canvas, audio, iframe, embed, object {
    vertical-align: middle;
  }

  button, [role='button'] {
    cursor: pointer;
  }

  button, input, textarea {
    appearance: none;
    background-color: transparent;
    background-image: none;
    border: none;
  }
  
  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    outline: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button, select {
    text-transform: none;
  }

  input, textarea, input::placeholder, textarea::placeholder {
    background: transparent;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
      box-shadow: 0 0 0 100px ${theme.color.canvas}cc inset !important;
  }

  input:-webkit-autofill {
      -webkit-text-fill-color: ${theme.color.text.primary} !important;
  }

  ::placeholder {
    color: ${theme.color.text.secondary};
  }

  ::-webkit-scrollbar {
    height: 6px;
    width: 6px; 
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color:  ${theme.color.scrollbar};
    border-radius: ${theme.size.rounded.full};
  }
  
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`
