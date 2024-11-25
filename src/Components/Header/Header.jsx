import {Link} from "react-router-dom"
import logo from "../../assets/images/logo 2.png"
import {Main, Img, Ul} from "./style";

export default function Header() {
    return (
        <Main>
                <Img src={logo} alt="logomarca" />
                <nav>
                    <Ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/novidades">Novidades</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                    </Ul>
                </nav>
        </Main>
    )
}