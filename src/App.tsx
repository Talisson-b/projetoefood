// import Fotter from "./components/Footer";
import Rotas from "./routes";
import { GlobalCss } from "./style";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <Rotas />
          <Cart />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
