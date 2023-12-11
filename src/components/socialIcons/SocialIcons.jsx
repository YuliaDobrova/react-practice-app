import React from 'react';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="container">
      <a
        href="https://www.linkedin.com/in/yuliia-dobrova/"
        target="_black"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin-square" id="linkedin"></i>
      </a>
      <a
        href="https://github.com/YuliaDobrova"
        target="_black"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github-square github" id="github"></i>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100011297070190"
        target="_black"
        rel="noopener noreferrer"
      >
        <i className="fa fa-facebook-square" id="facebook"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
