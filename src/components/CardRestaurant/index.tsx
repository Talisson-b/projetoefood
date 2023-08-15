import pizza from '../../assets/images/pizza.png'
import { ContainerCard, Description, Titulo } from './styles'
const CardRestaurtant = () => {
  return (
     <ContainerCard>
      <img src={pizza} alt="pizza" />
      <Titulo>Pizza Marguerita</Titulo>
      <Description>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresaco e um toque de azeite. Sabor e simplicidade!</Description>
      <button>Adicionar ao carrinho</button>
    </ContainerCard>
  )
}

export default CardRestaurtant