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
      <h1 className="post__title">{title}</h1>
      <p className="post__title-text">
        fetched from{' '}
        <a
          className="post__title-link"
          href="https://jsonplaceholder.typicode.com/posts"
          target="_blank"
          rel="noreferrer"
          title='https://jsonplaceholder is used to fetch fake data'
        >
          jsonplaceholder.typicode.com
        </a>
      </p>
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
