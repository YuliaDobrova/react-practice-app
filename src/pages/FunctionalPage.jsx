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
import Weather from '../components/weather/Weather';
import RandomNumber from '../components/randomNumber/RandomNumber';
import RatingCounter from '../components/ratingCounter/RatingCounter';
import DateComponent from '../components/date/DateComponent';
import ResponsivePhrase from '../components/responsivePhrase/ResponsivePhrase';
import useWindowDimensions from '../hooks/widthHook';

const FunctionalPage = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <ResponsivePhrase />
      <hr style={{ margin: 15 }} />
      <DateComponent />
      <hr style={{ margin: 15 }} />
      <CircleLoader />
      <hr style={{ margin: 15 }} />
      <p style={{ textAlign: 'center', marginBottom: 20 }}>
        <b>Weather widget</b>
      </p>
      <Weather />
      <hr style={{ margin: 15 }} />
      <PhotoList />
      <hr style={{ margin: 15 }} />
      {width >= 1100 && (
        <>
          <DragAndDrop />
          <hr style={{ margin: 15 }} />
        </>
      )}
      <CommentSlider />
      <hr style={{ margin: 15 }} />
      <RunningCard />
      <hr style={{ marginLeft: 15, marginRight: 15, marginTop: 50 }} />
      <Counter />
      <hr style={{ margin: 15 }} />
      <RatingCounter />
      <hr style={{ margin: 15 }} />
      <Timer />
      <hr style={{ margin: 15 }} />
      <RandomNumber />
      <hr style={{ margin: 15 }} />
      <TimerBitrhday />
      <hr style={{ margin: 15 }} />
      <ColorSwitcher />
      <hr style={{ margin: 15 }} />
      <ColorPicker />
      <hr style={{ margin: 15 }} />
      <AccordionItem
        title="Click the accordion below to expand/collapse the accordion content. "
        description="Here could be a secret message... 😊"
      />
      <hr style={{ margin: 15 }} />
      <TippyComponent />
    </>
  );
};

export default FunctionalPage;
