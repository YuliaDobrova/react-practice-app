import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
