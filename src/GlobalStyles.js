import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style:none;
    text-decoration: none;
  }

  body {
    background-color: #f5f5;
    font-size: 14px;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

`;
