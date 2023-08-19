import styled from 'styled-components'

export const Footer = styled.footer`
  min-height: 300px;
  height: 100%;
  background-color: #FFEBD9;
  margin-top: 120px;
`

export const ContainerFooter = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
 

  img {
    width: 125px;
    height: 57px;
    display: block;
    margin: 0 auto;
  }
`

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 8px;
  margin-top: 32px;

  img{
    width: 24px;
    height: 24px;
  }
`

export const CopyRight = styled.p`
  font-size: 10px;
  margin-top: 80px;
  max-width: 480px;
  width: 100%;
  text-align: center;
  margin-inline: auto;

`