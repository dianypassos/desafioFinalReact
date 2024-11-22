import cafe from "../../assets/images/Café.png"
import {Section, Div, H3, H1, P, Button, Img} from "./style"

export default function Novidade() {
    return (
        <Section>
            <Div>
                <H3>PREPARAÇÃO</H3>
                <H1>Níveis de torra</H1>
                <P>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</P>
                <Button>SAIBA MAIS</Button>
            </Div>
            <Img src={cafe} alt="imagem de café" />
        </Section>
    )
}