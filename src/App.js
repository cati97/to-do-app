import React, {useState} from 'react';
import './App.css';

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
    },
    {
      text: "Study",
      isCompleted: false
    }
  ]
   */

  return (
      <div className="app">
        <h1>To Do List</h1>
      </div>
  );
}

export default App;
