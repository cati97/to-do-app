import React, {useState} from 'react';
import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

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

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

  return (
      <div className="app">
        <h1>To Do List</h1>
          <TodoForm addTodo={addTodo}> </TodoForm>
          <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}> </TodoList>
      </div>
  );
}

export default App;
