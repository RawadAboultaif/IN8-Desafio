import styled from "styled-components";



export const Container = styled.footer`
  

    div {
        position: relative;
        display: flex;
        height: 8rem;
        justify-content: center;
        align-items: center;
    }

    img.rodape {
        width: 100%;
        height: 100%;
    }

    img.rodapemobile {
        display: none;
    }

    p {
        font-size: .7rem;
        color: white;
        font-family: 'ROBOTO', sans-serif;
        font-weight: 100;
        margin-bottom: 0.7rem;
        color: #ffffff95;
    }

    div.inforodape {
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 100;
    }

    a {
        position: fixed;
        width: 3rem;
        height: 3rem;
        right: 2rem;
        bottom: 2rem;
        transition-duration: .2s;

    }

    a:hover{
        transform: scale(1.1);
    }

    @media (max-width: 800px) {

        a {
            width: 5%;
            height: 5%;

        }

        img.rodapemobile {
        display: none;
    }

    }

    @media (max-width: 575px) {
        img.rodapemobile {
        display: block;
        width: 100%;
        height: 100%;
    }

        img.rodape {
            display: none;

        }

    }
`