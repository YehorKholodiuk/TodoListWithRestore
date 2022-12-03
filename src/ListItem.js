import React, {useState} from 'react';
import trash from "./Trash";

const ListItem = (props) => {
    const [inputValue, setInputValue] = useState(props.task.name);
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)

    }
    const saveButtonHandler = () =>{
        props.updateTask(props.task.id, inputValue)
        toggle()
    }
    const cancelButtonHandler = () => {
        toggle()
        setInputValue(props.task.name)
    }

    return (
        <li>
            {props.task.name}
            {!isOpen && <><button onClick={toggle}>Update</button>
                <button onClick={() => props.trash(props.task.id)}>Delete</button>
            </>}

            {isOpen && <>
                <input value={inputValue}
                       type='text'
                       onChange={(event) => setInputValue((event.target.value))}
                />
                <button onClick={saveButtonHandler}>Save</button>
                <button onClick={cancelButtonHandler}>Cancel</button>
            </>}
        </li>
    );
};

export default ListItem
