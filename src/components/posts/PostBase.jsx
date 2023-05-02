import React from 'react'
import {AiOutlineHeart, AiOutlineEye} from "react-icons/ai";
import {BsChatLeftText} from "react-icons/bs";
import {FaUserCircle} from "react-icons/fa";
import { CardContainer, CardImage, Header, Text,StyledIconImgWrapper } from '../../pages/home/HomeStyle';

const PostBase = ({post,index}) => {
  return (
    <CardContainer key={index}>

    <CardImage src={post.image} /> 
    <Header>{post.title}</Header>
    <Text>{post.content}</Text>
    <Text>{post.created_date.replace(/,/g, '/')}</Text>

    <>
    <FaUserCircle/>{post.author}
    </>
   
    <StyledIconImgWrapper>

      <>
      <AiOutlineHeart type= "button"/>
      {post.like_count}
      </>
      
      <>
      <BsChatLeftText type="button"/>
      {post.comments.length}
      </>
    
      <>
      <AiOutlineEye type="button"/>
      {post.visit_count}
      </>

    </StyledIconImgWrapper>

  </CardContainer>
  )
}

export default PostBase