import { useEffect, useState } from 'react';

export const Modal = ({ addNewTodo, closeModal }) => {
  const [input, setInput] = useState('');
  const [dataApi, setDataApi] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    addNewTodo(input);
    closeModal();
    setInput('');
  };

  //   useEffect(() => {
  //     console.log('New Input', input);
  //     setDataApi(fetch())
  //   }, [dataApi]);

  return (
    <div
      style={{
        width: 268,
        height: 234,
        backgroundColor: '#E4E6E7',
        borderRadius: 12,
        position: 'absolute',
        top: 10,
        left: '27%',
      }}
    >
      <p>Add New To Do</p>
      <input value={input} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
