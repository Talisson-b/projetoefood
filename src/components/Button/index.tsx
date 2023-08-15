import { Button } from "./styles";
import { Link } from "react-router-dom";
const Botao = () => {
  return (
    <Link to="/restaurantes">
      <Button>Saiba mais</Button>
    </Link>
  );
};

export default Botao;
