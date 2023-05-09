import {createGlobalStyle} from "styled-components"

export const GlobalStyles=createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body{
        font-size: 1.5rem;
        background:${({ theme })=> theme.colors.mainColor};
    }

    @media screen and (max-width: 550px) {
        h1 {
            font-size: 10px;
        }
    }

 

`

// //@media screen and (min-width: 1600px) {
//     .projects__item {
//       width: 33%;
//     }
//   }