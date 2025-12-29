import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Yangjin';
    src: url('https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff') format('woff');
    font-weight: normal;
    font-display: swap;
}
  
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Pretendard', sans-serif;
    color:#000;
  }
  a {
    text-decoration: none;
    color:#000; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  
  .inner { width:1200px; margin:auto; box-sizing:border-box; position:relative }
  .main { width: 100%; padding-top: 80px }
  .main h2 { text-align: center; font-size: 40px;   margin-bottom: 100px; font-family: 'Yangjin', sans-serif;}
   button { border:none; cursor: pointer; }
`;

export default GlobalStyle;
