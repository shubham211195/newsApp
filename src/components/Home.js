import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import PostList from "../components/PostList";

const Api_key="1f563bc0171e42ccb6b10bc4e0bbb7f5";
const Home = () => {
  const [post, setPost] = useState([]);
  const loadPage = async () => {
    const response=await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${Api_key}`)
    const final=await response.json();
    setPost(final.articles);
};
  useEffect(() => {
    loadPage();
  }, []);
  return (
    <>
      <Container fixed>
        <PostList post={post} />
      </Container>
    </>
  );
};

export default Home;
