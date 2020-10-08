import React from "react";

const Todo = ({todo, index}) => {
    return (
        <div className={"todo"}>
            <p>{todo.text}</p>
        </div>
    )
}

export default Todo;