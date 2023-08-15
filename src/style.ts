import { createGlobalStyle } from 'styled-components'
 
export const colors = {
  primary: '#E66767',
  bg: '#FFF8F2',
  bgFotter: '#FFEBD9',
  white: '#fff',


}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none; 
  }

  body {
    background-color: ${colors.bg};
    color: ${colors.primary};
    font-size: 14px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

  }
`

