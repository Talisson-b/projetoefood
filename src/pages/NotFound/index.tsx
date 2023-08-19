import Fotter from "../../components/Footer";

import { Container, Title } from "./styles";

const NotFound = () => {
  return (
    <>
      <Container>
        <Title>Erro 404: Página Não Localizada</Title>
      </Container>
      <Fotter />
    </>
  );
};

export default NotFound;
