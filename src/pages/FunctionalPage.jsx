import React from 'react';
import AccordionItem from '../components/accordionItem/AccordionItem';
import Counter from '../components/counter/Counter';
import PhotoList from '../components/photoList';

const FunctionalPage = () => {
  return (
    <>
      <Counter />
      <hr style={{ margin: 15 }} />
      <PhotoList />
      <hr style={{ margin: 15 }} />
      <AccordionItem
        title="Click the accordion below to expand/collapse the accordion content. "
        description="This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
      />
    </>
  );
};

export default FunctionalPage;
