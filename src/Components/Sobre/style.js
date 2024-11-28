import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
`

export const Img = styled.img`
    width: 20%;
    margin-left: 10%;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
`

export const H4 = styled.h4`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #1E3932;
`

export const H1 = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 4rem;
    color: #1E3932;
`

export const P = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: #1E3932;
    font-weight: 400;
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

    &:hover {
        cursor: pointer;
        background-color: #037143;
        color: #FFFFFF;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
  }
`