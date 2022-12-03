import React, {useState} from 'react';
import ListItem from "./ListItem";

const List = (props) => {
    return (
        <div>
            <ol>
                {props.list.filter((el) => !el.inTrash).map((task)=>
                    <ListItem task={task} key={task.id} updateTask={props.updateTask} trash = {props.trash}/>)}
            </ol>
            <hr/>
            <ol>

            </ol>

        </div>
    );
};

export default List;
