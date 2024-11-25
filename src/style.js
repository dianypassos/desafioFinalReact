import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        flex-direction: column;
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
`

