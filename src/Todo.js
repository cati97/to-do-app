import React from "react";

const Todo = ({todo, index, completeTodo, removeTodo}) => {
    return (
        <div className={"todo"}
             style={{backgroundColor: todo.isCompleted? "green": "grey"}}
        >
            <div className={"todo-text"}
                 style={{textDecoration: todo.isCompleted? "line-through": "", backgroundColor: todo.isCompleted? "green": "grey"
                 }}>
                {index+1}. {todo.text}
            </div>
            <button className={"remove-btn"} onClick={() => { if (todo.isCompleted===false){removeTodo(index)}}}>X</button>
            <button className={"complete-btn"} onClick={() => completeTodo(index)}>Done</button>
        </div>
    )
}

export default Todo;