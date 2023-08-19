import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurante from "./pages/Restaurante";
import NotFound from "./pages/NotFound";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Restaurante />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Rotas;
