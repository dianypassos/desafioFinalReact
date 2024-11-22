import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: borderbox;
    text-decoration: none;
    list-style: none;
}
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Img = styled.img`
    width: 7%;
    padding-top: 1%;
    padding-left: 5%;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 40vw;
    list-style: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;

    a {
    text-decoration: none;
    color: #1e3932;

    &:hover{
        color:palevioletred;
    }
  }
`