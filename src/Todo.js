import React from "react";

const Todo = ({todo, index}) => {
    return (
        <div className={"todo"}>
            {index+1}. {todo.text}
        </div>
    )
}

export default Todo;