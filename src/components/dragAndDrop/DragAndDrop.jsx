import React, { useState } from 'react';
import './DragAndDrop.css';

const DragAndDrop = () => {
  const initialState = [
    { id: 1, order: 3, text: 'Card-3' },
    { id: 2, order: 1, text: 'Card-1' },
    { id: 3, order: 2, text: 'Card-2' },
    { id: 4, order: 4, text: 'Card-4' },
  ];
  const [cardList, setCardList] = useState(initialState);
  const [currentCard, setCurrentCard] = useState(null);

  function dragStartHandler(e, card) {
    console.log('drag', card);
    setCurrentCard(card);
    e.target.style.borderColor = '#61dafb';
  }

  function dragEndHandler(e) {
    e.target.style.background = 'transparent';
    e.target.style.borderColor = 'rgba(139, 152, 178, 0.95)';
  }
  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'rgba(139, 152, 178, 0.25)';
  }

  function dropHandler(e, card) {
    e.preventDefault();
    setCardList(
      cardList.map(c => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      }),
    );
    e.target.style.background = 'transparent';
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (<>
      <p style={{fontStyle:"italic", textAlign:"center", marginBottom:15}}>Try to <b>drag</b> a card and <b>drop</b> it on the other random card!</p>
    <div className="DragAndDropWrapper">
      {cardList.sort(sortCards).map((card, index) => (
        <div
          className="DragAndDropCard"
          draggable={true}
          onDragStart={e => dragStartHandler(e, card)}
          onDragLeave={e => dragEndHandler(e)}
          onDragEnd={e => dragEndHandler(e)}
          onDragOver={e => dragOverHandler(e)}
          onDrop={e => dropHandler(e, card)}
          key={index}
        >
          {card.text}
        </div>
      ))}
    </div>
    </>
  );
};

export default DragAndDrop;
