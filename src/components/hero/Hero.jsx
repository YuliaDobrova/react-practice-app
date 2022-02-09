import React from 'react';

import asteroid from '../../images/asteroid.png';
import rocket from '../../images/rocket.png';
import { HeroStyled } from './HeroStyled';

const Hero = () => {
  return (
    <HeroStyled>
      <div className="asteroidWrapper">
        <img className="asteroidImg" src={asteroid} alt="asteroid" />
      </div>
      <div className="rocketWrapper">
        <img className="rocket" src={rocket} alt="rocket" />
      </div>
    </HeroStyled>
  );
};

export default Hero;
