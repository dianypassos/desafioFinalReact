import loja from "../../assets/images/Loja.png"
import {Section, Img, Div, H4, H1, P, Button} from "./style"

export default function Sobre() {
    return (
        <Section>
            <Img src={loja} alt="imagem entrada da loja" />
            <Div>
                <H4>PREPARAÇÃO</H4>
                <H1>Níveis de torra</H1>
                <P>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</P>
                <Button>SAIBA MAIS</Button>
            </Div>
        </Section>
    )
}