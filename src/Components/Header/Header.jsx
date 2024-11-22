import {Link} from "react-router-dom"
import * as S from "./style";

export default function Header() {
    return (
        <S.Header>
            <S.GlobalStyle/>
            <S.Img src="/src/assets/images/logo 2.png" alt="logomarca" />
            <nav>
                <S.Ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/novidades">Novidades</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </S.Ul>
            </nav>
        </S.Header>
    )
}