import styled from "styled-components"

export const MainStyle = styled.main`
    display: flex;
    align-items: center;
    height: 50vh;
`

export const ContainerText = styled.section`
    display: flex;
    flex-direction: column;
    margin: 5% 0 0 6%;
`

export const H2 = styled.h2`
    font-family: "Inter", sans-serif;
    color: #000000;
    font-weight: 400;
    font-size: 4rem;
`

export const H1 = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #000000;
    font-size: 4rem;

    span{
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 6rem;
        color: #037143;
    }
`

export const P = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #000000;
    font-size: 1.5rem;
    width: 40vw;
    margin-bottom: 1%;
`

export const Button = styled.button`
    border: 2px solid transparent;
    width: 9vw;
    padding: 10px 15px;
    border-radius: 30px;
    color: #FFFFFF;
    background-color: #037143;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    margin-top: 1%;

    &:hover {
        cursor: pointer;
        background-color: #037143;
        color: #FFFFFF;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
  }
`

export const Div = styled.div`
    display: flex;
    width: 20%;
    gap: 2rem;
    justify-content: end;
    align-self: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: 40%;
    margin-bottom: 30px;

    img:hover {
        transform: translateY(-7px);
        rotate: 17deg;
        transition: 0.9s;
        cursor: pointer;
    }
`

export const Section = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14rem;
    margin-left: 6rem;
`

export const Fundo = styled.img`
    position: absolute;
    top: -9rem;
    left: 230px;
    width: 37vw;
    z-index: 1;
`

export const Copo = styled.img`
    position: absolute;
    top: -15rem;
    left: 300px;
    z-index: 2;
    transition: transform 0.3s ease-in-out;

    &:hover{
        transform: scale(1.1);
        transition: 0.9s;
    }
`


