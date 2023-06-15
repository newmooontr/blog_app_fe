import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NewBlogContainer,
  FormNewBlog,
  Header,
  StyledButton, 
  StyledForm, 
  StyledInput,
  StyledTextarea} from './NewBlogStyle';
import axios from "axios";
import useAuthService  from '../../common/auth/AuthService';


const NewBlog = () => {
  const navigate = useNavigate();
  const auth = useAuthService();

  const [newBlog,setNewBlog] = useState({
    title:"",
    content:"",
    image: "https://cdn.pixabay.com/photo/2023/02/10/08/00/woman-7780330_640.png",
    is_publish: true
  
  });

  const [user, setUser] =useState()
  const [checked, setChecked]=useState(true)

  const url = "http://127.0.0.1:8000/blog/posts/";

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(newBlog);
    try {
      const response = await axios.post(url, newBlog, 
         {headers:{'Content-Type': 'application/json', 'Authorization': 'Token ' + user.token }});
       console.log(response);
       const {data} = response;
       //const data={};
      if (data.id) {
        navigate('/home')
      } else {
        alert("Bir hata oluştu")

      }
    } catch (e) {
        console.log(e);
    }


  }

  const handleChecked=()=>{
    setNewBlog({...newBlog, is_publish: !checked});
    setChecked(!checked);
   
  }

  const handleOnInputChange = (e)=>{
    e.preventDefault();

    setNewBlog({...newBlog, [e.target.name]:e.target.value});

  }



  useEffect(() => {
    const storedUser = auth.getUser();

    if (!storedUser) {
      navigate("login")
    } else {
      setUser(storedUser)
    }
    

  }, [])
  
  return (
      <NewBlogContainer>
      <FormNewBlog>
        <Header>{"New Blog"}</Header>
        <StyledForm onSubmit={handleSubmit}>
         <StyledInput onChange={handleOnInputChange} name='title' placeholder='Title' type="text"/>
          <StyledInput onChange={handleOnInputChange} name='image' placeholder='Image URL' type="text"/>
          <StyledTextarea onChange={handleOnInputChange} name='content' placeholder='Content' type="text" rows="7"/>
          <div style={{display:"flex"}}>
            <StyledInput type= "checkbox" id="publish" name= "is_publish" checked={checked} onChange={handleChecked}/>
            <label style={{display:"flex", fontSize:"15px",marginTop:"31px"}} htmlFor="publish">Published</label>
          </div>
          
          <StyledButton type='submit'>NEW BLOG</StyledButton>
        </StyledForm>
      </FormNewBlog>
      </NewBlogContainer>

  )
}

export default NewBlog