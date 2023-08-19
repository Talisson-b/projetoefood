import { Conteudo, ModalContainer, ModalContent } from "./styles";
import { PratoProps } from "../CardRestaurant";
import { formataPreco } from "../../pages/Restaurante";

type PropsVisivel = {
  visivel: boolean;
  desativar: () => void;
  pratoId: PratoProps | null;
};

const Modals = ({ visivel, desativar, pratoId }: PropsVisivel) => {
  if (!visivel) {
    return null;
  }
  console.log(pratoId);

  return (
    <ModalContainer>
      <ModalContent className="container ">
        <div>
          <img src={pratoId?.foto} alt="pizza" />
        </div>
        <Conteudo>
          <button onClick={() => desativar()}>X</button>
          <h1>{pratoId?.nome}</h1>
          <p>{pratoId?.descricao}</p>
          <p>{pratoId?.porcao}</p>
          <button>
            Adicionar ao carrinho - {formataPreco(pratoId?.preco)}
          </button>
        </Conteudo>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modals;
