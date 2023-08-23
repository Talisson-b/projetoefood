import Card from "../../components/Card";
import { Container } from "./styles";
import Header from "../../components/Header";
import Fotter from "../../components/Footer";
import { useGetRestaurantesQuery } from "../../services/api";
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
  const { data: restaurantes } = useGetRestaurantesQuery();
  console.log(restaurantes);
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
