import React, {useEffect, navigate, useState} from 'react';

import axios from "axios"

import PostBase from '../../components/posts/PostBase';

const Home = () => {

  const [posts, setPosts]= useState([]);

  const url = "http://127.0.0.1:8000/blog/posts/";

  useEffect(() => {

    const fetchData = async ()=> {
      const {data} = await axios.get(url, {headers:{'Content-Type': 'application/json'}});
      console.log(data);
      setPosts(data)
    }
    const user = localStorage.getItem("user");
    console.log('here');
    if (!user) {
      navigate("login");
    } else {
     fetchData();
    }
  
  }, []);
  


  return (
    <>
      {
        posts.map((post,index) =>
        <PostBase post={post} index={index}/>
        )
      }
    </>
    )
}

export default Home;