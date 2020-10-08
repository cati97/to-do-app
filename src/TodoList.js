import React from "react";
import Todo from "./Todo";

const TodoList = ({todos}) => {
    return (
        <div className={"todo-list"}>
            <ol>
                {todos.map((todo, index) => (
                <li key={index}>
                    <Todo todo={todo}
                          key={index}
                          index={index}
                    />
                </li>
                ))}
            </ol>
        </div>
    )
}

export default TodoList;