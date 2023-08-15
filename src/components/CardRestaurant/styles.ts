import styled from 'styled-components'
import { colors } from '../../style'

export const ContainerCard = styled.div`
   display: flex;
   flex-direction: column;
   padding: 8px;
   margin-bottom: 32px;
   color: #FFEBD9;
   background-color: ${colors.primary};

   button {
    font-weight: 700px;
    color: ${colors.primary};
    background-color: #FFEBD9;
    padding-block: 4px;
    border: none;
   }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-block: 8px;
`
export const Description = styled.p`
  line-height: 22px;
`