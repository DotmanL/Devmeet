import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Raleway', sans-serif;
    padding: 0px;
    margin: 0px;
    background-color: rgba(5, 91, 94);
    font-size: 1rem;
  line-height: 1.6;
 


    @media screen and ( max-width: 800px) {
        padding: 0px;
    margin: 0px;
    background: black;
    }
}

a{
    text-decoration: none;
    color: White;
    
}
*{
    box-sizing: border-box;
}


`
