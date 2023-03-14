import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    /* box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.background}; */
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, button, textarea, select, h1, h2, h3  {
    font-family: ${({ theme }) => theme.font.family};
    /* font: 400 16px 'Nunito', sans-serif; */
  }
`
