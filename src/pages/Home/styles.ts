import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  margin-top: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
