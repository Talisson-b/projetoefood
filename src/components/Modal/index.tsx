import { Conteudo, ModalContainer, ModalContent } from "./styles";
import { PratoProps } from "../CardRestaurant";
import { formataPreco } from "../../pages/Restaurante";
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";
type PropsVisivel = {
  visivel: boolean;
  desativar: () => void;
  pratoId: PratoProps | null;
};

const Modals = ({ visivel, desativar, pratoId }: PropsVisivel) => {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(pratoId!));
    dispatch(open());
  }

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
          <button onClick={addToCart}>
            Adicionar ao carrinho - {formataPreco(pratoId?.preco)}
          </button>
        </Conteudo>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modals;
