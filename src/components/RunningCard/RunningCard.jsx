import React, { useEffect } from 'react';
import { useState } from 'react';
import ballImage from '../../images/magic-ball.png';
import MyButton from '../shared/button/MyButton';
import './RunningCard.css';

const RunningCard = () => {
  const phrases = [
    'Yes, sure!',
    'That sounds good',
    'Yeah, it definitely needs to be done',
    "I don't think it's a good idea",
    'Maybe not today?',
    'Definitely NO',
    'You wish!',
    'No doubt 😉',
    'Absolutely',
    'Possibly',
    'Stars say NO'
  ];
  const [phrase, setPhrase] = useState("");

  function getRandomAnswer() {
    const randomAnswer = phrases[Math.floor(Math.random() * 11)];
    setPhrase(randomAnswer);
  }

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>
        <b>Fortune Teller 😈</b>
      </h3>
      <MyButton
        type="button"
        onClick={getRandomAnswer}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 20,
          marginBottom: 15,
          display: 'block',
        }}
      >
        Ask a question, press this button & get your answer!
      <img
          onClick={getRandomAnswer}
          // className="photo-list-img"
          src={ballImage}
          alt="Fortune Ball"
          width="100"
          height="100"
          style={{marginLeft:"auto", marginRight:"auto"}}
        />
      </MyButton>
      <div className="card">
        <h3 style={{textAlign:"center"}}>{phrase}</h3>
      </div>
    </>
  );
};

export default RunningCard;
