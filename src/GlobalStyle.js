import { createGlobalStyle } from 'styled-components';
import uniSansBook from './assets/fonts/UniSans-Book.woff2';
import uniSansRegular from './assets/fonts/UniSans-Regular.woff2';
import uniSansSemiBold from './assets/fonts/UniSans-SemiBold.woff2';
import uniSansBold from './assets/fonts/UniSans-Bold.woff';
import openSansRegular from './assets/fonts/OpenSans-Regular.woff';
import openSansSemiBold from './assets/fonts/OpenSans-SemiBold.woff';
import openSansBold from './assets/fonts/OpenSans-Bold.woff';
import bg from './assets/images/background.webp';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-orange: #ff9110;
    --header-grey: #434343;
    --nav-dark-grey: #2f2f2f;
    --link-light-grey: #b3b3b3;
    --text-dark: #333333;
    --text-hover-grey: #7e7e7e;
    --background-grey: #f6f6f6;
    --border-light-grey: #e5e5e5;
    --color-white: #ffffff;
    --text-dark-grey: #5b5b5b;
    --box-shadow-small: 0 3px 2px 0 rgb(0 0 0 / 0.2);
    --header-link-text: 1.1rem;
    --black-half-transparency: rgba(0, 0, 0, 0.5);
  }

  @font-face {
    font-family: 'Uni Sans Book';
    src: url(${uniSansBook}) format('woff2');
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url(${uniSansRegular}) format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url(${uniSansSemiBold}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url(${uniSansBold}) format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansRegular}) format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansSemiBold}) format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansBold}) format('woff');
    font-weight: 700;
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
    background-position: center 139px;
    background-image: url(${bg});
    min-height: 100vh;
  }
`;

export default GlobalStyle;
