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
import { Link, useParams } from "react-router-dom";
import { PropsRestaurante } from "../../pages/Home";
import { useEffect, useState } from "react";

const Banners = () => {
  const [restaurantes, setRestaurantes] = useState<PropsRestaurante | null>(
    null
  );
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((json) => setRestaurantes(json));
  }, []);
  if (!restaurantes) {
    return <h3>Carregando...</h3>;
  }
  return (
    <>
      <ContainerBackgroud
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <ContainerHeader className="container">
          <Link to="/">
            <SubTitle>Restaurantes</SubTitle>
          </Link>
          <Link to="/">
            <Imagem src={logo} alt="EFOOD" />
          </Link>
          <SubTitle>0 produto(s) no carrinho</SubTitle>
        </ContainerHeader>
      </ContainerBackgroud>
      <Background
        style={{
          backgroundImage: `url(${restaurantes.capa})`,
        }}
      >
        <ContainerTitle>
          <p>{restaurantes.tipo}</p>
          <Title>{restaurantes.titulo}</Title>
        </ContainerTitle>
      </Background>
    </>
  );
};

export default Banners;
