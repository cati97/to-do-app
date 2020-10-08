import React, {useState} from 'react';
import './App.css';
import TodoForm from "./TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  /*
  [
    {
      text: "Swim",
      isCompleted: false
    },
    {
      text: "Lunch",
      isCompleted: false
    }
  ]
   */

    const addTodo = text => {
        const newTodos = [...todos, {text, isCompleted: false}];
        setTodos(newTodos);
        console.log(newTodos);
    }

  return (
      <div className="app">
        <h1>To Do List</h1>
          <TodoForm addTodo={addTodo}> </TodoForm>
      </div>
  );
}

export default App;
