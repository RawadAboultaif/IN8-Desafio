import { useState } from "react";
import Modal from 'react-modal';
import backgroundImg from "../../assets/index-image.jpg";
import backgroundImgMobile from "../../assets/index-image-mobile.jpg"



import logoImg from "../../assets/logo-in8-dev.svg"
import menu from "../../assets/hamburguer.svg"
import menuAberto from "../../assets/hamburguer-aberto0.svg"
import botaoX from "../../assets/marca-x.png"

import { Container } from "./style";
import {menuopen} from './sumir'
import {menuclose} from './sumir'




export function Header() {
    return (
        <Container id="home" >
                

                <div>
                <nav>
                    <a href="#"><img src={menu} alt="" onClick={menuopen} /></a>
                </nav>

                    <div className="nav" >

                    <div id="todomenu"  className="menu-aberto">
                            <div className="menucard">
                                <img  className="burguer" src={menuAberto} alt="" />

                                <img className="botaoX"src={botaoX} alt="" onClick={menuclose}/>
                                    <div className="menuinfo">
                                        <p>Cadastro</p>
                                        <p>Lista</p>
                                        <p>Sobre Mim</p>
                                    </div>
                            </div>
                    </div>
                    <div className="logo">

                        <img className="logo" src={logoImg} alt="inv" />
                                
                    </div>
                        <div className="buttons">
                            <button type="button">Cadastro</button>
                            <button type="button">Lista</button>
                            <button type="button">Sobre</button>
                        </div>


                        <div className="h1">
                                <h1>ESTÁGIO</h1>
                                <p>PROVA DE SELEÇÃO</p>
                        </div>

                    </div>
                        
                    <div>
                        <img className="header"src={backgroundImg} alt="homem branco vestindo moletom preto usando um notebook" />
                        <img className="headermobile"src={backgroundImgMobile} alt="" />
                    </div>
                </div>
        </Container>
    )
}