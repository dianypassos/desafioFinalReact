import { useState } from "react"
import copinhoAmarelo from "../../assets/images/amarelo 1.png"
import copinhoVermelho from "../../assets/images/vermelho 1.png"
import copinhoLaranja from "../../assets/images/laranja 3.png"
import copaoLaranja from "../../assets/images/laranja2x 1.png"
import copaoVermelho from "../../assets/images/vermelho2x 1.png"
import copaoAmarelo from "../../assets/images/amarelo2x 1.png"
import fundoVerde from "../../assets/images/cordefundo_verde.png"
import fundoVermelho from "../../assets/images/corefundo_vermelha.png"
import fundoAmarelo from "../../assets/images/cordefundo_Amarela.png"
import {MainStyle, Copo, Section, H2, H1, P, Button, ContainerText, Div} from "./style"

export default function Home() {
    const [cafeSelecionado, setCafeSelecionado] = useState(copaoLaranja);
    const [corDeFundo, setCorDeFundo] = useState(fundoVerde);

    const selecionarCafe1 = () => {
        setCafeSelecionado(copaoLaranja);
        setCorDeFundo(fundoVerde);
    };

    const selecionarCafe2 = () => {
        setCafeSelecionado(copaoVermelho);
        setCorDeFundo(fundoVermelho);
    };

    const selecionarCafe3 = () => {
        setCafeSelecionado(copaoAmarelo);
        setCorDeFundo(fundoAmarelo);
    };

    return(
        <MainStyle>
            <ContainerText>
                <H2>Mais que Café</H2>
                <H1>Isso é <span>Starbucks</span></H1>
                <P>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</P>
                <Button>SAIBA MAIS</Button>
                <Div>
                    <img onClick={selecionarCafe1} src={copinhoLaranja} alt="Starbucks Copo Laranja" />
                    <img onClick={selecionarCafe2} src={copinhoVermelho} alt="Starbucks Copo Vermelho" />
                    <img onClick={selecionarCafe3} src={copinhoAmarelo} alt="Starbucks Copo Amarelo" />
                </Div>
            </ContainerText>
            <Section>
                <Copo src={cafeSelecionado} alt="Starbucks Café" />
                <img src={corDeFundo} alt="Cor de fundo" />
            </Section>
        </MainStyle>
    )
}