import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, completeTodo}) => {
    return (
        <div className={"todo-list"}>
            {todos.map((todo, index) => (
                <Todo todo={todo}
                      key={index}
                      index={index}
                      completeTodo={completeTodo}
                />

            ))}
        </div>
    )
}

export default TodoList;