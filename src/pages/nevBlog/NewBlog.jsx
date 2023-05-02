import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const NewBlog = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("login")
    }
    

  }, [])
  
  return (
    <div>NewBlog</div>
  )
}

export default NewBlog