import React from 'react';
import PostItem from './postItem/PostItem';
import './PostList.css';

const PostList = ({ posts, title, remove }) => {
  return (
    <div className="post__wrapper">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
