import { useState } from "react";
import "./App.css";

function Modal({ addItem }) {
  const [task, setTask] = useState();

  function handleInput (event) {
    setTask(event.target.value)
  }

  return (
    <div className="modal">
      Add New To Do
      <input type="text" onChange={handleInput} />
      <button className="addBtn" onClick={() => addItem(task)}>
        Add
      </button>
    </div>
  );
}

export default Modal;
