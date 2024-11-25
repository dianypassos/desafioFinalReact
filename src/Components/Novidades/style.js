import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1E3932;
    height: 80vh;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
`

export const H3 = styled.h3`
    font-family: "Inter", sans-serif;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1%
`

export const H1 = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #FFFFFF;
    font-size: 4rem;
    margin-bottom: 1%;
`

export const P = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #FFFFFF;
    font-size: 1.5rem;
    margin-bottom: 2%;
    width: 40vw;
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
export const Img = styled.img`
    width: 30%;
    margin-right: 2%;
`