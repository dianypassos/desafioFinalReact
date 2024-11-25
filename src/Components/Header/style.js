import styled from "styled-components";

export const Main = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    list-style: none;
    width: 100%;
    height: 20vh;
`

export const Img = styled.img`
    margin-left: 5%;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    width: 40vw;

    a {
    text-decoration: none;
    color: #1e3932;

    &:hover{
        color: #4ec766;
    }
  }
`