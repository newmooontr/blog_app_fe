import React, { useEffect,useState } from 'react'
import {AiOutlineHeart, AiOutlineEye} from "react-icons/ai";
import {BsChatLeftText} from "react-icons/bs";
import {FaUserCircle} from "react-icons/fa";
import { CardContainer, CardImage, Header, Text,StyledIconImgWrapper } from '../../pages/home/HomeStyle';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import useAuthService  from '../../common/auth/AuthService';




const PostBase = ({post,index, setPosts}) => {

    const navigate = useNavigate();
    const auth = useAuthService();
    const [user, setUser] =useState();

    const [isLiked,setIsLiked] = useState(false)
   


const likeHandler = async (e)=> {
    e.preventDefault();

    if (user) {
        try {
            const url = `http://127.0.0.1:8000/blog/posts/${post.id}/likes/`;
          const response = await axios.post(url, {is_liked: false}, 
             {headers:{'Content-Type': 'application/json', 'Authorization': 'Token ' + user.token }});
           console.log(response);
           const {data} = response;
    
           //const data={};
          if (response.status == '201') {
            setIsLiked(data.is_liked)
            setPosts((prevState)=>{
                const currentPost= prevState.find(state=>state.id === post.id);
                if(currentPost) {
                    currentPost.liked_count = data.is_liked ? currentPost.like_count++ : --currentPost.like_count;
                    console.log(currentPost)
                }
                return prevState
            })
            
          } else {
            alert("Bir hata oluştu")
    
          }
        } catch (e) {
            console.log(e);
        }

    } else{
        navigate("/login");
    }



  }

useEffect(() => {
    const storedUser = auth.getUser();

    if (storedUser) {
      setUser(storedUser)
    }
    

  }, [])

const postClickHandler =()=>{
    navigate('/detail/'+post.id)
}

  return (
    <CardContainer key={index} onClick={postClickHandler}>

    <CardImage src={post.image} /> 
    <Header>{post.title}</Header>
    <Text>{post.content}</Text>
    <Text>{post.created_date.replace(/,/g, '/')}</Text>

    <>
    <FaUserCircle/>{post.author}
    </>
   
    <StyledIconImgWrapper>

      <>
      <AiOutlineHeart style={{color: isLiked ? "red" : "black"}} onClick={likeHandler} type= "button"/>
      {post.like_count}

      </>
      
      <>
      <BsChatLeftText  type="button"/>
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

export default PostBase;