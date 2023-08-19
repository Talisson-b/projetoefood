import CardRestaurtant from "../../components/CardRestaurant";

export function formataPreco(preco = 0) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
}

const Restaurante = () => {
  return (
    <>
      <CardRestaurtant />
    </>
  );
};

export default Restaurante;
