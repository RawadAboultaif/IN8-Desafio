import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
    --fundo-cadastro: #29abe2;
    --letra-botao: #29abe2;
    --fundo-botao: #012d51;
    --linha-tabela: #29abe2;
    --info-tabela: #808080;
    

    

 }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior:smooth;

 }




 html {
    @media (max-width: 1080px) {
        font-size: 93,75%;
 }

    @media (min-width: 728px) {
        font-size: 87.5%;
    }
 }

   @media (max-width: 800px) {
      div.wrapper {
         max-width: 100vw;
      }
   }
 body {
   display: flex;
   align-items: center;
   justify-content: center;
    -webkit-font-smoothing: antialiased;
   width: 100%;
   height: 100%;
 } 


 div.wrapper {
   width: 100%;
 }

 button {
    cursor: pointer;
 }

 :disabled {
    opacity: 0.6;
    cursor: not-allowed;
 }

`