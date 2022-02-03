import React from 'react';
import AccordionItem from '../components/accordionItem/AccordionItem';
import Counter from '../components/counter/Counter';
import PhotoList from '../components/photoList';
import CommentSlider from '../components/commentSlider/CommentSlider';
import Timer from '../components/timer/Timer';
import TimerBitrhday from '../components/timerBirthday/TimerBitrhday';
// import ColorSwitcher from '../components/colorSwitcher/ColorSwitcher';

const FunctionalPage = () => {
  return (
    <>
      <PhotoList />
      <hr style={{ margin: 15 }} />
      <AccordionItem
        title="Click the accordion below to expand/collapse the accordion content. "
        description="This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
      />
      <hr style={{ margin: 15 }} />
      <CommentSlider />
      <hr style={{ marginLeft: 15, marginRight: 15, marginTop: 50 }} />
      <Timer />
      <hr style={{ margin: 15 }} />
      <Counter />
      <hr style={{ margin: 15 }} />
      <TimerBitrhday />
      <hr style={{ margin: 15 }} />
      {/* <ColorSwitcher /> */}
    </>
  );
};

export default FunctionalPage;
