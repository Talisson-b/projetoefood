import { Button } from "./styles";
import { Link } from "react-router-dom";

type Props = {
  id: number;
};

const Botao = ({ id }: Props) => {
  return (
    <Link to={`restaurantes/${id}`}>
      <Button>Saiba mais</Button>
    </Link>
  );
};

export default Botao;
