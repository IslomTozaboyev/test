import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800;900&display=swap');
 body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #3f495e;
  }
  *{
    box-sizing: border-box;
  }
  `;
export default GlobalStyle;
