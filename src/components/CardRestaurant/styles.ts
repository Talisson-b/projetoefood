import styled from "styled-components";
import { colors } from "../../style";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin-bottom: 32px;
  color: #ffebd9;
  background-color: ${colors.primary};
  height: 100%;
  cursor: pointer;

  > button {
    font-weight: bold;
    color: ${colors.primary};
    background-color: #ffebd9;
    padding-block: 4px;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-block: 8px;
`;
export const Description = styled.p`
  line-height: 22px;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 56px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
