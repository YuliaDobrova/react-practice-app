import React from 'react';
import PostItem from './postItem/PostItem';
import './PostList.css';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <div className="PostsNotFound">Posts not found</div>;
  }

  return (
    <div className="post__wrapper">
      <h1
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: '24px',
        }}
      >
        {title}
      </h1>
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
