import { Button } from "../Button/styles";
import { CartContainer, ListItem, Overlay, SideBar } from "./styles";
import lixeira from "../../assets/images/lixeira.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { formataPreco } from "../../pages/Restaurante";

const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  function closeCart() {
    dispatch(close());
  }

  function PrecoTotal() {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!);
    }, 0);
  }

  function removeToCart(id: number) {
    dispatch(remove(id));
  }

  return (
    <CartContainer className={isOpen ? "isOpen" : ""}>
      <Overlay onClick={closeCart}></Overlay>
      <SideBar>
        <ul>
          {items.map((item) => (
            <ListItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <div onClick={() => removeToCart(item.id)} className="lixeira">
                <img src={lixeira} alt="Icone de lixeira" />
              </div>
            </ListItem>
          ))}
        </ul>
        <div className="price">
          <p>Valor total</p>
          <p>{formataPreco(PrecoTotal())}</p>
        </div>
        <Button>Continuar com entrega</Button>
      </SideBar>
    </CartContainer>
  );
};

export default Cart;
