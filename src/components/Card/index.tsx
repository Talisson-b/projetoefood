import { Link } from "react-router-dom";
import star from "../../assets/images/estrela.svg";
import { PropsRestaurante } from "../../pages/Home";
import Botao from "../Button";
import Tag from "../Tag";
import TagDestaque from "../TagDestaque";
import {
  CardContainer,
  Description,
  HeaderTitle,
  Assessment,
  Title,
} from "./styles";

type Props = {
  restaurantes: PropsRestaurante[];
};

export function getDescription(description: string) {
  if (description.length > 95) {
    return description.slice(0, 180) + "...";
  }
  return description;
}

const Card = ({ restaurantes }: Props) => {
  return (
    <>
      {restaurantes.map((restaurante) => (
        <Link to={`/restaurantes/${restaurante.id}`} key={restaurante.id}>
          <CardContainer>
            <img src={restaurante.capa} alt="sushi" />
            <Tag>{restaurante.tipo}</Tag>
            {restaurante.destacado && <TagDestaque />}

            <div>
              <HeaderTitle>
                <Title>{restaurante.titulo}</Title>
                <Assessment>
                  <span>{restaurante.avaliacao}</span>
                  <img src={star} alt="estrela" />
                </Assessment>
              </HeaderTitle>
              <Description>{getDescription(restaurante.descricao)}</Description>
              <Botao id={restaurante.id} />
            </div>
          </CardContainer>
        </Link>
      ))}
    </>
  );
};

export default Card;
