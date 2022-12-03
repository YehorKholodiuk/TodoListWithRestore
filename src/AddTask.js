import React, {useState} from 'react';

const AddTask = (props) => {
    const [inputNewTask, setInputNewTask] = useState('')
    const addTaskButtonHandler = () => {
        props.addNewTask(inputNewTask)
        setInputNewTask('')
    }
    return (
        <div>
            <input onChange={(e)=> setInputNewTask(e.target.value) }
                   value={inputNewTask}
                   placeholder={'enter new task'}
            />
            <button disabled={inputNewTask === '' || inputNewTask === ' '}
                    onClick={addTaskButtonHandler}>Add Task</button>
        </div>
    );
};

export default AddTask;
