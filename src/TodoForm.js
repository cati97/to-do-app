import React, {useState} from "react";

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;  // if nothing entered - do nothing
        addTodo(value);
        setValue("");
    }

    return (
        <div>
            <form className={"form"} onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    className={"input"}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button className={"add-btn"}>Add</button>
            </form>
        </div>
    )
}

export default TodoForm;