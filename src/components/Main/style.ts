import styled from "styled-components";

export const Container = styled.main`
    margin: 0;
    padding: 0;
    border: 0;
    background: var(--fundo-cadastro);


    div.cadastro {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: center;
        margin-bottom: 3rem;
        padding: 2rem 0;
        margin-top: -1rem;
        
    }

    h2 {
        font-family: "Work Sans", sans-serif;
        font-weight: 100;
        color: white;
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        color: white;
        font-family: "ROBOTO", sans-serif;
        font-weight: 300;
    }

    input {
        background-color: transparent;
        border: none;
        border-bottom:1px solid white;
        width: 30rem;
        outline: none;
        margin-bottom: 1rem;
        color: white;
        font-family: 'ROBOTO', sans-serif;
        font-weight: 400;
    }    

    input:focus {
        color: white;
    }

    button {
        background: var(--fundo-botao);
        color: var(--letra-botao);
        border: none;
        width: 13rem;
        height: 3rem;
        margin-top: 1.5rem;
        font-size: 2rem;
        font-family: "Work Sans", sans-serif;
        transition: filter 0.5s;
    }

    button:hover {
        filter: brightness(200%);
    }


    section:nth-child(2) {
        display: block;
        width: 30rem;
    }


    div.tabela {
        background-color: white;
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;

        table {
            border-collapse: collapse;
            border-style: hidden;

            caption {
                margin-bottom: 4rem;
                font-family: 'Work Sans', sans-serif;
                font-weight: 100;
                color: var(--letra-botao);
                font-size: 3rem;
                text-shadow: 0.2px 0.2px var(--letra-botao);

            }

            th, td {
            border: 1px solid var(--letra-botao);
            height: 2rem;
            padding: 0 5vw;
            }

            tr:hover{
                transform: scale(1.02);
                background-color: azure;
            }


            th {
                color: var(--fundo-botao);
                font-family: 'ROBOTO', sans-serif;
                font-weight: 400;
            }

            td {
                color: var(--info-tabela);
            }


            tbody {
                td:nth-child(1) {
                   color: var(--fundo-botao);
                   font-family: 'ROBOTO', sans-serif;
                }
            }
        }


        @media (max-width: 800px) {
            td, th {
                width: 100%;
                padding: 0 1.5vw !important;
            }
        }

    }
    @media (max-width: 575px) {
            div.cadastro {
                width: 100%;
            }

            section {
                padding: 0;
                margin: 0;

            }

            input, p  {
                padding-left: 0;
                margin-right: 0rem;
                margin-left: 5rem;
                width: 20rem;
                align-items: center;
            }


        }


        @media (max-width: 575px) {
            table {
                width: 10%;

                caption {
                    text-align: center;
                    justify-content: center;
                    color: white;
                    font-size: 2rem !important;
                    width: 200px;
                    margin-left: 10rem;

                }


            }
            
        }
    `