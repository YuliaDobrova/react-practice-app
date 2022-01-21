import React from 'react';
import styles from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={styles.myInput} />;
});

export default MyInput;

// с помощью useRef можно получить доступ к DOM-элементу
// const bodyInputRef = useRef();

//  Неуправляемый (неконтролируемый) компонент через useRef
// const MyInput = React.forwardRef((props, ref) => {
//   return <input ref={ref} {...props} className={styles.myInput} />;
// });

// ===========
// <MyInput
//   // ref={bodyInputRef}
//   type="text"
//   placeholder="Post description"
// />
