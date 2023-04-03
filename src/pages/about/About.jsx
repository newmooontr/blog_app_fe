import React from 'react'
import Flex from  '../../components/globalStyle/FlexStyle'
import { AboutContainer, Header, StyledImg, Text,StyledIconImgWrapper } from './AboutStyle'
import fener from "../../assets/fener.png"
import { AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";



const About = () => {
  return (
    <AboutContainer>
      <Header>{"Sinop"}</Header>
      <Text>{"Karadenizin İncisi"}</Text>
      <StyledImg src={fener}/>

      <StyledIconImgWrapper>
        <AiOutlineInstagram type="button"/>
        <AiOutlineTwitter type="button"/>
      </StyledIconImgWrapper>
    </AboutContainer>
  )
}
export default About;