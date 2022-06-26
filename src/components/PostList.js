import React from 'react';
import Container from '@mui/material/Container';
import PostCard from '../components/PostCard';

const PostList = (props) => {
  return (
    <>
        {props.post.map((singlePost,idx)=>{
            return(
                <Container fixed key={idx}>
                    <PostCard singlePost={singlePost} />
                </Container>
            )
        })}
    </>
  )
}

export default PostList