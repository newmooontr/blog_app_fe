import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuthService from "../../common/auth/AuthService";
import {
  Image,
  StyledIconImgWrapper,
  Header,
  StyledText,
  StyledUser,
  StyledContainer,
} from "../../pages/detail/DetailStyle";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Detail = () => {
  const params = useParams();
  const [user, setUser] = useState();
  const [post, setPosts] = useState();
  const auth = useAuthService();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [commentToggle, setCommentToggle] = useState(false);
  const [newComment, setNewComment] = useState("");

  const likeHandler = async (e) => {
    e.preventDefault();

    if (user) {
      try {
        const url = `http://127.0.0.1:8000/blog/posts/${post.id}/likes/`;
        const response = await axios.post(
          url,
          { is_liked: false },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token " + user.token,
            },
          }
        );
        console.log(response);
        const { data } = response;

        //const data={};
        if (response.status == "201") {
          setIsLiked(data.is_liked);
          setPosts((prevState) => {
            const currentPost = prevState.find((state) => state.id === post.id);
            if (currentPost) {
              currentPost.liked_count = data.is_liked
                ? currentPost.like_count++
                : --currentPost.like_count;
              console.log(currentPost);
            }
            return prevState;
          });
        } else {
          alert("Bir hata oluştu");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate("/login");
    }
  };

  const commentHandler = () => {
    setCommentToggle(!commentToggle);
  };

  const addComment = () => {
    const url = `http://127.0.0.1:8000/blog/posts/${post.id}/comments/`;
    console.log(newComment);
  };

  const commentHandlerChange = (e) => {
    setNewComment(e.target.value);
  };


  
  useEffect(() => {
    const fetchData = async (storedUser) => {
      const url = `http://127.0.0.1:8000/blog/posts/${params.postId}/`;

      const { data } = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + storedUser.token,
        },
      });
      console.log(data);
      setPosts(data);
    };
    const storedUser = auth.getUser();
    console.log(storedUser)
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/login");
    }

    fetchData(storedUser);
  }, []);

  return (
    <StyledContainer>
      {post && (
        <>
          <Image src={post.image} />
          <StyledUser>
            <FaUserCircle  style={{color:'red'}}/>
            <div>
              <div>{post.author}</div>
              <div>{post.created_date}</div>
            </div>
           
          </StyledUser>
          <Header>{post.title}</Header>
          <StyledText> {post.content}</StyledText>

          <StyledIconImgWrapper>
            <div>
              <AiOutlineHeart
                style={{ color: isLiked ? "red" : "black" }}
                onClick={likeHandler}
                type="button"
              />
              <div>{post.like_count}</div>
            </div>

            <div>
              <BsChatLeftText onClick={commentHandler} type="button" />
              {post.comments.length}
            </div>

            <div>
              <AiOutlineEye type="button" />
              {post.visit_count}
            </div>
          </StyledIconImgWrapper>
          <div>
            {commentToggle && (
              <>
                <textarea
                  name="comment"
                  cols="30"
                  rows="10"
                  onChange={commentHandlerChange}
                ></textarea>
                <button onClick={addComment}>ADD COMMENT</button>
              </>
            )}
          </div>
        </>
      )}
    </StyledContainer>
  );
};

export default Detail;
