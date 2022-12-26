import React from 'react';
import Board from '../components/board/Board';

const BoardPage = () => {
  return (
    <div>
      <p style={{textAlign:"center"}}>Magic board</p>
      <Board/>
    </div>
  );
};

export default BoardPage;