import { GlobalStyles } from "./styles/global";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";


export function App() {

  return (
    <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      <GlobalStyles />
    </div>
  );
}
