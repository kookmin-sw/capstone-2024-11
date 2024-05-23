// GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import JuaRegular from "../assets/Fonts/Jua-Regular.woff";

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: "jua";
        src: local("jua"), url(${JuaRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: "jua", sans-serif;
    }
`;

export default GlobalStyle;
