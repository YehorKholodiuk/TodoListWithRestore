import React from 'react';

const Trash = (props) => {
    return (
        <div>
            <ol>
                {props.list.filter((el)=> el.inTrash)
                    .map(task =>
                        <li key={task.id}>
                            {task.name}
                            <button onClick={() => props.trash(task.id)}>Restore</button>
                        </li>)}
            </ol>
        </div>
    );
};

export default Trash;
