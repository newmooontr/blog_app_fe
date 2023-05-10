import React from 'react'
import Flex from  '../../components/globalStyle/FlexStyle'
import { AboutContainer, Header, StyledImg, Text,StyledIconImgWrapper } from './AboutStyle'
import computer from "../../assets/computer.jpeg"
import { AiOutlineTwitter, AiOutlineInstagram,AiFillGithub} from "react-icons/ai";



const About = () => {
  return (
    <AboutContainer>
      <Header>{"NewMoon"}</Header>
      <Text>{"Full Stack Developer"}</Text>
      <StyledImg src={computer}/>

      <StyledIconImgWrapper>

        <a href="https://github.com/newmooontr"><AiFillGithub type='button'/></a>
        <AiOutlineInstagram type="button"/>
        <AiOutlineTwitter type="button"/>
      </StyledIconImgWrapper>
    </AboutContainer>
  )
}
export default About;