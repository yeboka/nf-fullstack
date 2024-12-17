import React, { useRef, useEffect } from 'react';

/*
    Задание Автофокус на поле ввода
    1) Реализовать фокус на инпут при нажатии на кнопку 
    2) Использовать useRef
*/

function InputFocus() {

  const inputEl = {};

  const handleClick = () => {
    console.log(inputEl);
    
    inputEl.focus()
  } 

  return (
    <div className='column'>
      <input ref={inputEl} className='pasword' type='text' />
      <button onClick={handleClick}>Focus my input</button>
    </div>
  );
}

export default InputFocus;
