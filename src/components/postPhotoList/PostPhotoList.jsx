import React from 'react';
import PostListItem from './postPhotoItem';
import posts from './data/posts.json';
import './PostPhotoList.css';

const PostPhotoList = () => {
  return (
    <>
      <h2 className="post-list-title">Photo List</h2>
      <ul className="post-list">
        {posts.map(({ imgUrl, title, text, id }) => (
          <PostListItem imgUrl={imgUrl} title={title} text={text} key={id} />
        ))}
      </ul>
    </>
  );
};

export default PostPhotoList;
