import { useEffect, useState } from "react";
import "./App.css";

// Todo header main footer
// main => add todo, list of todos, remove, filter
var globalId = 0;

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState();
  const [filterStatus, setFilterStatus] = useState("active");

  // {
  //   title,
  //   status,
  //   id,
  // }

  function add() {
    setTodos([
      {
        title: newTodoText,
        status: "active",
        id: globalId++,
      },
      ...todos,
    ]);

    setNewTodoText("");
  }

  function changeStatus(id) {
    let changedTodos = todos.map((item) => {
      if (item.id !== id) return item;

      return {
        ...item,
        status: "done",
      };
    });

    setTodos(changedTodos);
  }

  function filterChange (newStatus) {
    setFilterStatus(newStatus);
  }

  useEffect(() => {
    setFilteredTodos(todos.filter((todo) => {
      return todo.status === filterStatus
    }))
  }, [todos, filterStatus])

  return (
    <>
      <header>
        <h3>Hello yerbolat! This is your TODO app</h3>
      </header>
      <main>
        <div className="input_container">
          <input
            className="todo_input"
            type="text"
            value={newTodoText}
            onChange={(event) => {
              setNewTodoText(event.target.value);
            }}
          />
          <button onClick={add}>Add</button>
        </div>
        <div className="filters_container">
          <button
            className={`${filterStatus === "active" ? "choosen" : ""}`}
            onClick={() => filterChange("active")}
          >
            Active
          </button>
          <button
            className={`${filterStatus === "done" ? "choosen" : ""}`}
            onClick={() => filterChange("done")}
          >
            Done
          </button>
        </div>
        <div className="todo_list_container">
          {filteredTodos.map((todo, idx) => (
            <div key={todo.id} className="todo_container">
              <p
                className="todo_item"
                style={{
                  textDecoration:
                    todo.status === "done" ? "line-through" : "none",
                }}
              >
                {todo.title + " - " + todo.status}
              </p>
              <button
                onClick={() => {
                  changeStatus(todo.id);
                }}
              >
                ✅
              </button>
              <button>🗑️</button>
            </div>
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
