import { useEffect, useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [input, setInput] = useState(0);

  const [todos, setTodos] = useState([]);

  function addTask (newTask) {
    setTodos([...todos, newTask])
  }
  useEffect(() => {
    console.log("lsdflsdlf");
  }, [])

  return (
    <>
      <div className="app">
        <div className="rel">
          <button className="btn" onClick={() => setIsModalOpen(!isModalOpen)}>
            <img src="/Plus.png" alt="+" />
          </button>
          {isModalOpen && <Modal addItem={addTask}/>}
        </div>

        <ul>
          {todos && todos.map((todo, index) => (
            <li key={index}>{index + " " + todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
