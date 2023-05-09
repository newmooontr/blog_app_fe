import React, {useEffect, useState} from 'react';

import axios from "axios"

import PostBase from '../../components/posts/PostBase';
import { useNavigate } from 'react-router-dom';

import { StyledCardList } from './HomeStyle';

const Home = () => {

  const [posts, setPosts]= useState([]);
  const navigate = useNavigate();

  const url = "http://127.0.0.1:8000/blog/posts/";

  useEffect(() => {

    const fetchData = async ()=> {
      const {data} = await axios.get(url, {headers:{'Content-Type': 'application/json'}});
      console.log(data);
      setPosts(data)
    }
    fetchData();
  }, []);
  


  return (
    <StyledCardList>
      {
        posts.map((post,index) =>
        <PostBase key={index} post={post} index={index} setPosts={setPosts}/>
        )
      }
    </StyledCardList>
    )
}

export default Home;