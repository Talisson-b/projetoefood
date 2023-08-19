import { PropsRestaurante } from "../../pages/Home";
import { getDescription } from "../Card";
import {
  Container,
  ContainerCard,
  ContainerGrid,
  Description,
  Titulo,
} from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fotter from "../Footer";
import Banners from "../Banner";
import Modals from "../Modal";

export type PratoProps = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

const CardRestaurtant = () => {
  // const [modalAtivo, setModalAtivo] = useState(false);
  const [restaurante, setRestaurante] = useState<PropsRestaurante | null>(null);
  const { id } = useParams();
  const [visivel, setVisivel] = useState(false);
  // const [overlay, setOverlay] = useState(false);
  const [pratoId, setPratoId] = useState<PratoProps | null>(null);

  function ativarModal(prato: PratoProps) {
    setVisivel(true);
    setPratoId(prato);
  }

  function desativarModal() {
    setVisivel(false);
  }

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((json) => setRestaurante(json));
  }, [id]);

  if (!restaurante) {
    return <h3>Carregando...</h3>;
  }

  if (restaurante) {
    return (
      <>
        <Container>
          <Banners />
          <ContainerGrid className="container">
            {restaurante.cardapio.map((prato) => (
              <ContainerCard
                onClick={() => ativarModal(prato)}
                key={prato.nome}
              >
                <img src={prato.foto} alt={prato.nome} />
                <Titulo>{prato.nome}</Titulo>
                <Description>{getDescription(prato.descricao)}</Description>
                <button>Adicionar ao carrinho</button>
              </ContainerCard>
            ))}
          </ContainerGrid>
          <Modals
            visivel={visivel}
            desativar={desativarModal}
            pratoId={pratoId}
          />
          <Fotter />
        </Container>
      </>
    );
  }
};

export default CardRestaurtant;
