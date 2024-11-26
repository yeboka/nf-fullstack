import { useState } from 'react';
import './App.css';
import { Modal } from './components/Modal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    // if(isModalOpen){
    //   setModalOpen(false)
    // }else{
    //   setModalOpen(true)
    // }
    // setModalOpen(!isModalOpen);
    setModalOpen((prevState) => !prevState);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodo) => {
    const newObj = {
      name: newTodo,
      id: new Date(),
      status: 'ToDo',
    };
    setTodos((prevTodo) => [...prevTodo, newObj]);
  };
  console.log(todos);

  return (
    <>
      <div style={{ position: 'relative' }}>
        {isModalOpen && (
          <Modal addNewTodo={addNewTodo} closeModal={closeModal} />
        )}
        <button
          style={{
            marginTop: 200,
            width: 52,
            height: 52,
            borderRadius: 100,
            padding: 14,
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            padding: 0,
            transform: isModalOpen ? 'rotate(-45deg)' : '', 
            transition: 'transform 150ms ease', // smooth transition
          }}    
          onClick={openModal}
        >
          <img src="/plus.png" alt="+" />
        </button>
        {todos && todos.map((item) => <p key={item.id}>{item.name}</p>)}
      </div>
    </>
  );
}

export default App;
