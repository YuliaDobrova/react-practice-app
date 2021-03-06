import React from 'react';
import MyButton from '../../shared/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = props => {
  const navigate = useNavigate();
  // console.log('navigate', navigate);

  return (
    <div className="post">
      <div className="post__content">
        <strong className="post__content">
          {props.post.id}. {props.post.title}
        </strong>
        <div className="post__content">{props.post.body}</div>
      </div>
      <div className="posr__btns">
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
