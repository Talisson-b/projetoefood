import styled from "styled-components";
import { colors } from "../../style";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1;
  display: flex;
  background-color: rgba(0, 0, 0, 0.73);
`;

export const ModalContent = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 32px;
  display: flex;
  column-gap: 24px;
  position: fixed;
  display: flex;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1,
  p {
    margin-bottom: 16px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`;

export const Conteudo = styled.div`
  position: relative;

  @media (max-width: 550px) {
    position: static;
  }

  h1 {
    font-size: 18px;
    font-weight: 900;
  }

  & > :first-child {
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    border: none;
    display: flex;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: -30px;
    right: -25px;

    @media (max-width: 550px) {
      top: 0;
      right: 10px;
    }
  }

  p {
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
  }

  & :last-child {
    padding: 4px 8px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.primary};
    background-color: #ffebd9;
  }
`;
