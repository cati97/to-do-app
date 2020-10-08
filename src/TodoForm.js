import React, {useState} from "react";

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

    return (
        <div className={"form"}>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    className={"input"}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button className={"add-bth"}>Add</button>
            </form>
        </div>
    )
}

export default TodoForm;