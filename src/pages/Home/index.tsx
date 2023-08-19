import Card from "../../components/Card";
import { Container } from "./styles";
import Header from "../../components/Header";
import { useState, useEffect } from "react";

import Fotter from "../../components/Footer";

export type PropsRestaurante = {
  id: number;
  titulo: number;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: [
    {
      foto: string;
      preco: number;
      id: number;
      nome: string;
      descricao: string;
      porcao: string;
    }
  ];
};

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<PropsRestaurante[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((json) => setRestaurantes(json));
  }, []);
  if (!restaurantes) {
    return <h3>Carregando...</h3>;
  }
  return (
    <div className="cointainer">
      <Header />
      <Container className="container">
        <Card restaurantes={restaurantes} />
      </Container>
      <Fotter />
    </div>
  );
};

export default Home;
