import React from "react";
import Todo from "./Todo";

const TodoList = ({todos}) => {
    return (
        <div className={"todo-list"}>
            {todos.map((todo, index) => (
                <Todo todo={todo}
                      key={index}
                      index={index}
                />

            ))}
        </div>
    )
}

export default TodoList;