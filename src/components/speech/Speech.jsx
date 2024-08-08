import React, { useState } from 'react';
import MyInput from '../shared/input/MyInput';
import MyButton from '../shared/button/MyButton';

const Speech = () => {
  const [speech, setSpeech] = useState('');

  function handleSpeech(e) {
    e.preventDefault();
    console.log('handleSpeech', e.currentTarget.value);
    setSpeech(e.currentTarget.value);
  }

  function speak() {
    const utterance = new SpeechSynthesisUtterance(speech);
    speechSynthesis.speak(utterance);
  }

  function clear() {
    setSpeech('');
  }

  return (
    <div>
      <h4
        style={{
          textAlign: 'center',
          marginBottom: 10,
          letterSpacing: '0.03em',
        }}
      >
        Try to type and hear your text!
      </h4>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MyInput
          id="speechinput"
          type="text"
          autoComplete="off"
          value={speech}
          placeholder="Enter text"
          onChange={e => handleSpeech(e)}
          style={{ width: 300, textAlign: 'center' }}
        />
        <MyButton onClick={speak}>Speak</MyButton>
        <MyButton onClick={clear}>Clear</MyButton>
      </div>
    </div>
  );
};

export default Speech;
