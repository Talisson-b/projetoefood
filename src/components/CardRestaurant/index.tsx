import { getDescription } from "../Card";
import {
  Container,
  ContainerCard,
  ContainerGrid,
  Description,
  Titulo,
} from "./styles";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Fotter from "../Footer";
import Banners from "../Banner";
import Modals from "../Modal";
import { useGetRestauranteQuery } from "../../services/api";
import { add, open } from "../../store/reducers/cart";
import { useDispatch } from "react-redux";
export type PratoProps = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

const CardRestaurtant = () => {
  const { id } = useParams();
  const [visivel, setVisivel] = useState(false);
  const [pratoId, setPratoId] = useState<PratoProps | null>(null);
  const { data: restaurante } = useGetRestauranteQuery(id);
  const dispatch = useDispatch();

  function addToCart(prato: PratoProps) {
    dispatch(add(prato));
    dispatch(open());
  }

  function ativarModal(prato: PratoProps) {
    setVisivel(true);
    setPratoId(prato);
  }

  function desativarModal() {
    setVisivel(false);
  }

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
              <ContainerCard key={prato.id}>
                <div onClick={() => ativarModal(prato)} key={prato.nome}>
                  <img src={prato.foto} alt={prato.nome} />
                  <Titulo>{prato.nome}</Titulo>
                  <Description>{getDescription(prato.descricao)}</Description>
                </div>
                <button onClick={() => addToCart(prato)}>
                  Adicionar ao carrinho
                </button>
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
