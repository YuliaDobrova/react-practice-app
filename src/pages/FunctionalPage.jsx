import React from 'react';
import CircleLoader from '../components/circleLoader';
// import RadioButton from '../components/radioButton/RadioButton';
import PhotoList from '../components/photoList';
import AccordionItem from '../components/accordionItem/AccordionItem';
import DragAndDrop from '../components/dragAndDrop';
import CommentSlider from '../components/commentSlider/CommentSlider';
import Counter from '../components/counter/Counter';
import Timer from '../components/timer/Timer';
import TimerBitrhday from '../components/timerBirthday/TimerBitrhday';
import ColorSwitcher from '../components/colorSwitcher/ColorSwitcher';
import ColorPicker from '../components/colorPicker/ColorPicker';
import TippyComponent from '../components/tippy/Tippy';
import RunningCard from '../components/RunningCard/RunningCard';

const FunctionalPage = () => {
  return (
    <>
      <CircleLoader />
      <hr style={{ margin: 15 }} />
      {/* <RadioButton />
      <hr style={{ margin: 15 }} /> */}
      <PhotoList />
      <hr style={{ margin: 15 }} />
      <AccordionItem
        title="Click the accordion below to expand/collapse the accordion content. "
        description="This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
      />
      <hr style={{ margin: 15 }} />
      <TippyComponent />
      <hr style={{ margin: 15 }} />
      <DragAndDrop />
      <hr style={{ margin: 15 }} />
      <CommentSlider />
      <hr style={{ marginLeft: 15, marginRight: 15, marginTop: 50 }} />
      <Timer />
      <hr style={{ margin: 15 }} />
      <RunningCard />
      <hr style={{ margin: 15 }} />
      <Counter />
      <hr style={{ margin: 15 }} />
      <TimerBitrhday />
      <hr style={{ margin: 15 }} />
      <ColorSwitcher />
      <hr style={{ margin: 15 }} />
      <ColorPicker />
    </>
  );
};

export default FunctionalPage;
