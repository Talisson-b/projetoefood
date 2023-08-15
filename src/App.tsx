import Fotter from "./components/Footer";
import Rotas from "./routes";
import { GlobalCss } from "./style";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
      <Fotter />
    </>
  );
}

export default App;
