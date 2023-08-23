import styled from "styled-components";
import { colors } from "../../style";
import { Button } from "../Button/styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 70%;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.isOpen {
    display: flex;
  }
`;

export const SideBar = styled.aside`
  background-color: ${colors.primary};
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding-inline: 8px;

  @media (max-width: 550px) {
    max-width: 300px;
    width: 100%;
  }

  ul {
    margin-top: 32px;
  }

  ${Button} {
    max-width: 100%;
    width: 100%;
    background-color: #ffebd9;
    color: ${colors.primary};
    margin: 0 auto;
    font-size: 14px;
    font-weight: bold;
  }

  .price {
    color: #ffebd9;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-top: 40px;
    p {
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const ListItem = styled.li`
  background-color: #ffebd9;
  display: flex;
  position: relative;
  margin-bottom: 15px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    padding: 8px 8px 12px 8px;
  }

  h3 {
    padding-block: 8px 16px;
  }

  .lixeira {
    position: absolute;
    bottom: 0;
    right: 0;
    color: ${colors.primary};
    img {
      height: 40px;
      width: 40px;
    }
  }
`;
