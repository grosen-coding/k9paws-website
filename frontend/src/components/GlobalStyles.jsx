import { createGlobalStyle } from "styled-components";
import { device } from "./device";

const GlobalStyle = createGlobalStyle`

/* :root {
    --color-primary: rgb(17, 100, 102);
    --color-primary-light: rgb(209, 232, 226);
    --color-primary-dark: rgb(44, 53, 49);
    --color-primary-med: rgb(53, 65, 59);
    
    --color-secondary-light: rgb(255, 203, 154);
    --color-secondary-dark: rgb(217, 176, 140);
    
    --color-tertiary-light: #77c9d4;
    --color-tertiary-dark: #3e6d74;
    
    --color-grey-dark: #a5a5af;
    --color-grey-dark-2: #555;
    --color-grey-very-dark: #333;
    --color-grey-light-1: #f7f7f7;
    
    --color-light: #fff;
    
    // Contact Form
    --error-color: #c41805;
    --success-color: #1ef678;
    
    // Font Sizes
    --default-font-size: 1.6rem;
    
    // Shadows
    --box-shadow: rgba(0, 0, 0, 0.15);
    --box-shadow-btn-hover: rgba(0, 0, 0, 0.2);
    --box-shadow-btn-active: rgba(0, 0, 0, 0.1);
} */

/* Body */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;

  @media ${device.desktop} {
    font-size: 75%;
  }

  @media ${device.laptop} {
    font-size: 50%;
  }

  @media ${device.tablet} {
    font-size: 55%;
  }

  @media ${device.mobileL} {
    font-size: 65%;
  }
}


body {
    font-family: "Poppins", sans-serif;  

}

// Headers

  h1 {

    font-weight: 600;
    letter-spacing: 1.5px;
  }

  h2 {
    font-weight: 600;
    letter-spacing: 1.8px;
    line-height: 1.2;
  }

  h3 {
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.2;
    // font-size: 3rem;
  }

  h4 {
    font-size: 2.2rem;
    text-align: center;
    font-weight: 600;
  }


  // Typography

  p {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
  }

  // overflow-x: hidden;



a {
  text-decoration: none;
  color: $color-secondary-dark;
  display: block;
}


::selection {
  color: #fff;
}

p.status-in-progress {
  color: orangered;
}

p.status-waiting {
  color: red;
}

p.status-ready {
  color: steelblue;
}

p.status-complete {
  color: green;
}


/* Wrapper */
/* .wrapper {
  width: 1500px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
} */



`;
export default GlobalStyle;
