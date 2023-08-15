import CardRestaurtant from "../../components/CardRestaurant"
import { Container } from "./style"
import Banners from "../../components/Banner"

const Restaurante = () => {
  return (
      <>
    <Banners />
    <Container className="container">
      <CardRestaurtant />
      <CardRestaurtant />
      <CardRestaurtant />
      <CardRestaurtant />
      <CardRestaurtant />
      <CardRestaurtant />

    </Container>
      </>
  )
}

export default Restaurante