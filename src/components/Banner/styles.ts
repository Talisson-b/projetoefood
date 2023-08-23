import styled from "styled-components";
import { colors } from "../../style";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
`;

export const ContainerBackgroud = styled.div`
  padding-bottom: 64px;
`;

export const Imagem = styled.img`
  width: 125px;
  height: 57px;
`;

export const Background = styled.div`
  background-size: cover;
  height: 280px;
`;

export const ContainerTitle = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  /* position: absolute; */
  padding-top: 24px;

  p {
    font-size: 32px;
    color: #fff;
    font-weight: 100;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  max-width: 544px;
  margin-top: 144px;
  color: #fff;
`;
export const SubTitle = styled.a`
  font-weight: 900;
  font-size: 18px;
  color: ${colors.primary};
  cursor: pointer;
`;
