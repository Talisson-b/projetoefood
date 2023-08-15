
import star from '../../assets/images/estrela.svg'
import Restaurantes from '../../models/Resturantes'
import Botao from '../Button'
import Tag from '../Tag'
import TagDestaque from '../TagDestaque'
import { CardContainer, Description, HeaderTitle, Assessment, Title} from './styles'

type Props = {
  restaurantes: Restaurantes[]
}

const Card = ({restaurantes}: Props) => {
  return (
   <>
   {restaurantes.map((restaurante) => (

    <CardContainer>
    <img src={restaurante.img} alt="sushi" />
     <Tag>{restaurante.titleRestaurant}</Tag>
    {restaurante.emphasis && (
      <TagDestaque />
    )}

   <div>
   <HeaderTitle>
      <Title>{restaurante.title}</Title>
      <Assessment>
        <span>{restaurante.assessment}</span> 
        <img src={star} alt="estrela"/>
        </Assessment>
    </HeaderTitle>
    <Description>{restaurante.description}</Description>
    <Botao/>
      
   </div>
  </CardContainer>
   ))}
   </>
  )
}

export default Card