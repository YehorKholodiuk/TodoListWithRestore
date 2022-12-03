import './App.css';
import Header from "./Header";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import List from "./List";
import AddTask from "./AddTask";
import Trash from "./Trash";

function App() {
  const appName = 'ToDoList App';
  const [list, setList] = useState(
      [
        {
          id: uuidv4(),
          name: 'Learn Js',
          done: false,
          inTrash: false
        },
        {
          id: uuidv4(),
          name: 'Learn React',
          done: true,
          inTrash: false
        },
      ]
  );
  const updateTask = (id, name) => {
    const newList = list.map(el => el.id === id ? {...el , name}: el)
    setList(newList)
  }

  const addNewTask = (inputNewTask) => {
    const newTask = {
      id:uuidv4(),
      name: inputNewTask,
      done: false,
      inTrash: false
    }
    setList([...list, newTask])
  }
  const trash = (id) => {
    const newList = list.map(el => el.id === id ? {...el, inTrash:!el.inTrash }: el)
    setList(newList)
  }

  return (
      <div className="App">

        <Header appName={appName}/>
        <AddTask addNewTask={addNewTask}/>
        <List list={list} updateTask={updateTask} trash={trash}/>
        <Trash list={list} trash={trash}/>
      </div>
  );
}

export default App;
