import React from "react";

const Todo = ({todo, index, completeTodo}) => {
    return (
        <div className={"todo"}>
            <div className={"todo-text"}
                 style={{textDecoration: todo.isCompleted? "line-through": ""}}>
                {index+1}. {todo.text}
            </div>
            <button className={"complete-btn"} onClick={() => completeTodo(index)}>Done</button>
        </div>
    )
}

export default Todo;