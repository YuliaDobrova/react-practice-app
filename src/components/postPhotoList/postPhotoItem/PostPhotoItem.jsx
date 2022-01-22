import React from "react";
import "./PostPhotoItem.css";

const PostPhotoItem = ({ imgUrl, title, text }) => {
  return (
    <>
      <li className="post-list-item">
        <img
          className="post-list-img"
          src={imgUrl}
          alt={text}
          width="200"
          height="150"
        />
        <h4 className="post-list-item-title">{title}</h4>
        <p className="post-list-item-text">{text}</p>
      </li>
    </>
  );
};

export default PostPhotoItem;
