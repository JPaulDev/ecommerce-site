import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-orange: #ff9110;
    --header-grey: #434343;
    --nav-dark-grey: #2f2f2f;
    --link-light-grey: #b3b3b3;
    --text-dark: #333333;
    --text-hover-grey: #7e7e7e;
    --background-grey: #f4f4f4;
    --border-light-grey: #e1e1e1;
    --color-white: #ffffff;
    --text-dark-grey: #5b5b5b;
    --box-shadow-small: 0 3px 2px 0 rgb(0 0 0 / 0.2);
    --header-link-text: 1.1rem;
    --black-half-transparency: rgba(0, 0, 0, 0.5);
  }

  * {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    background-color: var(--background-grey);
    min-height: 100vh;
  }
`;

export default GlobalStyle;
