import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, completeTodo, removeTodo}) => {
    return (
        <div className={"todo-list"}>
            {todos.map((todo, index) => (
                <Todo todo={todo}
                      key={index}
                      index={index}
                      completeTodo={completeTodo}
                      removeTodo={removeTodo}
                />

            ))}
        </div>
    )
}

export default TodoList;