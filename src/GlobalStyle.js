import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --max-width: 75rem;
        --padding: 1rem 1rem;
        font-family: poppins, Arial, Helvetica, sans-serif;        
    }

    @media (min-width: 768px){
        :root{
            --padding: 1rem 4rem;
        }
    }

    .bold {font-weight:bolder;}


    body {
        background:black;
        margin: 0;
        padding: 0;
        color:white;
        a{
            color: inherit;
            text-decoration: none
        }
    }

`;

export default GlobalStyle;
