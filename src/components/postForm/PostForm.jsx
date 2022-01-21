import React, { useState } from 'react';

import MyButton from '../shared/button/MyButton';
import MyInput from '../shared/input/MyInput';
import './PostForm.css';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const addNewPost = event => {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form className="form">
      {/* Управляемый компонент */}
      <MyInput
        value={post.title}
        // onChange={e => setTitle(e.target.value)}
        onChange={e => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post title"
      />
      <MyInput
        value={post.body}
        // onChange={e => setBody(e.target.value)}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
