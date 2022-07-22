import styled from 'styled-components'
import backgroundImg  from '../../assets/index-image.jpg'

export const Container = styled.header`
    padding: 0;
    margin: 0;



    div {
        position: relative;
        border: 0;
        margin: 0;
        height: 100%;
    }

    img {
        position: relative;
        justify-content: center;
        height: 100%;
        align-content: center;
        width: 100%;
        z-index: 5;
        
    }


    div.h1 {
        position: absolute;
        color: white;
        justify-content: center;
        top: 32%;
        left: 20%;
        height: 2rem;
    }

    h1 {
        font-family: 'Work Sans', sans-serif;
        font-weight: 100;
        font-size: 5rem;
    }

    p {
        font-family: 'Work Sans', sans-serif;
        font-weight: 100;
        font-size: 2.1rem;
    }

    div.nav {
        display: grid;
        justify-content: space-between;
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;
        grid-template-areas:
        "A B"
        "C C"
    }
    
    img.logo {
        width: 10rem;
        left: 100%;
        top: -31%;
    }

    button {
        margin: 3.5rem 1rem;
        padding: 0.5rem;
        background-color: transparent;
        border: none;
        color: white;
        transition: box-shadow 0.2s;
    }

    button:hover {
        background: #ffffff2e;
        border-radius: 0.2rem;
        box-shadow: 0px 0px 9px 0px white;

    }

    div.buttons {
        margin-right: 5rem;
    }

    div.menu {
        visibility: hidden;
    }

    nav {
        display: none;
        width: 1rem;
        margin: 0;
        padding: 0;
    }

    div.menu {
            display: none;
        }

    div.menu-aberto {
            display: none;
        }

        img.headermobile {
            display: none;
        }



    @media (max-width: 800px) {
        img.headermobile {
            display: none;
        }

        div.buttons {
            display: none;
            margin: 0;
        }

        div.nav {
            display: flex;
            justify-content: flex-end;
        }

        img.logo {
            margin-left: 4rem;
        }

        h1 {
        font-size: 3rem;
        }

        p {
        font-size: 1.5rem;
        }

        nav {

            position: absolute;
            display: block;
            width: 1.5rem;
            height: 1.5em;
            z-index: 101;
            margin-top: 3rem;
            margin-left: 3rem;

        }

        div.menu-aberto {
                display: none;
                background: rgb(255 255 255 / 41%);
                position: absolute;

                height: 210vh;
                width: 100vw;
                z-index: 200;

                div.menuinfo {
                    margin-top: 4rem;
                    margin-left: 3rem;
                }

                p {
                    color: white;
                    font-size: 20px;
                    margin-top: 1rem;
                    margin-left: 0.7rem;
                
                }

                img {

                    width: 1.5rem;
                    height: 1.5em;
                    left: 25%;
                    top: 4.1%;
                }

                div.menucard {
                    position: absolute;
                    background-color: var(--fundo-cadastro);
                    width: 15rem;
                    height: 15rem;
                }

                img.botaoX {
                    left: 70%;
                    cursor: pointer;
                }

                

            }

            div.aparecer{
                    display: block;
                }

    }

    @media (max-width: 575px) {

        div.logo {
            width: 100vw;
        }

        img.logo {
            float: right;
            width: 25%;
            left: -10%;
            top: -43%;
            margin-left: 0;
        }

        nav {
            margin: 1.6rem;
        }

        img.header {
            display: none;
        }

        img.headermobile {
            display: block;
        }
    }

        div.h1 {
        position: absolute;
        color: white;
        justify-content: center;
        top: 20%;
        left: 20%;
        height: 2rem;
        }

        h1 {
            font-size: 3.7rem;
        }

`
    



