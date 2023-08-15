import { ContainerFooter, CopyRight, Footer, SocialList } from "./styles";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import logo from "../../assets/images/logo.svg";
const Fotter = () => {
  return (
    <Footer>
      <ContainerFooter className="container">
        <img src={logo} alt="efood" />

        <SocialList>
          <li>
            <img src={instagram} />
          </li>
          <li>
            <img src={facebook} />
          </li>
          <li>
            <img src={twitter} />
          </li>
        </SocialList>
        <CopyRight>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado{" "}
        </CopyRight>
      </ContainerFooter>
    </Footer>
  );
};

export default Fotter;
