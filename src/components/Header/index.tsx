import logo from '../../assets/images/logo.svg'
import { Container, Imagem, Title } from './styles'
import background from '../../assets/images/backgroud.svg'



const Header = () => {
  return (
   <>
     <Container style={{
      backgroundImage: `url(${background})`
    }}>
     <Container className='container'>
        <Imagem src={logo} alt="EFOOD" />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
     </Container>
    </Container>
  
   </>
  )
}

export default Header