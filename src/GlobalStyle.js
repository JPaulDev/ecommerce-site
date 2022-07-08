import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-orange: #ff9110;
    --header-grey: #434343;
    --nav-dark-grey: #2f2f2f;
    --text-black: #333333;
    --text-hover-grey: #7e7e7e;
    --box-shadow-small: 0 3px 2px 0 rgb(0 0 0 / 0.2);
  }

  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
