import styled from "styled-components";
import { colors } from "../../style";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.primary};
  background-color: ${colors.white};
  margin-top: 80px;
  position: relative;
  min-height: 400px;

  img {
    max-width: 100%;
    max-height: 217px;
    object-fit: cover;
  }

  div {
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  span {
    font-weight: bold;
    font-size: 18px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  padding: 8px;
  height: 88px;
`;

export const Assessment = styled.div`
  display: flex;
  column-gap: 8px;
`;
