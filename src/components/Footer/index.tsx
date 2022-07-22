import { Container } from "./style";
import footerImg from "../../assets/rodape-desktop.jpg"
import footerimgMobile from "../../assets/rodape-mobile.jpg"

import backtotop from '../../assets/topo-pag.svg'


export function Footer() {





    return (
        <Container>
            <div>
                <div className="inforodape">
                    <p>Rawad Aboueltaif </p>
                    <p>Rawad.aboultaif@hotmail.com</p>
                    <p>(31)99367-0051</p>
                    <p>Cursando Ciência da Computação</p>
                </div>
                <img className="rodape" src={footerImg} alt="rodapé azul com pontinhos brancos." />
                <img className="rodapemobile"src={footerimgMobile} alt="" />

                <a href="#home" >
                  <img src={backtotop} alt="" />
                </a>
            </div>
        </Container>
    );
}