import logo from "../../assets/images/logo.svg";
import {
  Background,
  ContainerBackgroud,
  ContainerHeader,
  ContainerTitle,
  Imagem,
  Title,
  SubTitle,
} from "./styles";
import background from "../../assets/images/backgroud.svg";
import bannerRestaurante from "../../assets/images/imgrestaurante.png";
import { Link } from "react-router-dom";

const Banners = () => {
  return (
    <>
      <ContainerBackgroud
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <ContainerHeader className="container">
          <Link to="/">
            {" "}
            <SubTitle>Restaurantes</SubTitle>
          </Link>
          <Link to="/">
            {" "}
            <Imagem src={logo} alt="EFOOD" />
          </Link>
          <SubTitle>0 produto(s) no carrinho</SubTitle>
        </ContainerHeader>
      </ContainerBackgroud>
      <Background
        style={{
          backgroundImage: `url(${bannerRestaurante})`,
        }}
      >
        <ContainerTitle>
          <p>Italiana</p>
          <Title>La Dolce Vita Trattoria</Title>
        </ContainerTitle>
      </Background>
    </>
  );
};

export default Banners;
