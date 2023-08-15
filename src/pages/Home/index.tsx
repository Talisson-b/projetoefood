import Card from "../../components/Card";
import Restaurantes from "../../models/Resturantes";
import { Container } from "./styles";
import sushi from "../../assets/images/sushi.png";
import macarrao from "../../assets/images/macarrao.png";
import hamburguer from "../../assets/images/hamburguer.jpg";
import churrascaria from "../../assets/images/churrascaria.jpg";
import mexicana from "../../assets/images/mexicano.jpg";
import nordestina from "../../assets/images/nodestina.jpg";
import Header from "../../components/Header";

const restaurante: Restaurantes[] = [
  {
    id: 1,
    img: sushi,
    title: "Hioki Sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos,sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery",
    assessment: 4.9,
    emphasis: true,
    titleRestaurant: "Japonesa",
  },
  {
    id: 2,
    img: macarrao,
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    assessment: 4.6,
    titleRestaurant: "Italiana",
  },
  {
    id: 3,
    img: hamburguer,
    title: "BurgerBliss",
    description:
      "Entre no paraíso dos sabores no BurgerBliss, onde cada mordida é uma explosão de felicidade. Nossos hambúrgueres artesanais são feitos com ingredientes frescos e selecionados. ",
    assessment: 4.7,
    titleRestaurant: "FastFood",
  },
  {
    id: 4,
    img: churrascaria,
    title: "BrasaMar Churrascaria à Beira-Mar",
    description:
      "Imagine desfrutar de carnes grelhadas à beira-mar no BrasaMar. Nossa churrascaria oferece uma experiência relaxante, onde você pode saborear cortes saborosos enquanto sente a brisa do oceano. ",
    assessment: 4.9,
    titleRestaurant: "Churrascaria",
  },
  {
    id: 5,
    img: mexicana,
    title: "CasaPicante ",
    description:
      "CasaPicante, onde o calor encontra a paixão culinária. Nossa cozinha é uma fusão de ingredientes frescos e temperos ardentes, criando pratos que são uma explosão de sabores vibrantes. ",
    assessment: 4.5,
    titleRestaurant: "Mexicana",
  },
  {
    id: 6,
    img: nordestina,
    title: "Cantinho Nordestino Sabores ",
    description:
      "No Cantinho Nordestino, cada prato conta uma história da região. Nossa cozinha é um tributo à cultura e às tradições culinárias do Nordeste.",
    assessment: 4.8,
    titleRestaurant: "Nordestina",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <Container className="container">
        <Card restaurantes={restaurante} />
      </Container>
    </>
  );
};

export default Home;
