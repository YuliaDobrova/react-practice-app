import React from 'react';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div class="container">
      <a
        href="https://www.linkedin.com/in/yuliia-dobrova-37a335217/"
        target="_black"
      >
        <i class="fa fa-linkedin-square" id="linkedin"></i>
      </a>
      <a href="https://github.com/YuliaDobrova" target="_black">
        <i class="fa fa-github-square github" id="github"></i>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100011297070190"
        target="_black"
      >
        <i class="fa fa-facebook-square" id="facebook"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
