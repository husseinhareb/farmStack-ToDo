import React, { useState, useEffect} from 'react';
import './App.css';
import TodoView from './components/TodoListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')
  
    

  // Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  },[]);

  // Post a todo
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
};
  const handleTaskTitle =(e) =>{
    const trimmedValue = e.target.value.trimStart();
    setTitle(trimmedValue);
  }
  const handleTaskDesc = (e) =>{
    const trimmedValue = e.target.value.trimStart();
    setDesc(trimmedValue);
  }
return (
  <div className="App" style={{ backgroundColor: "#4C5B61", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div className="list-group-item" style={{ backgroundColor: "#DBFCFF" }}>
      <div className="card-body">
        <span className="card-text">
          <input className="mb-2" onChange={handleTaskTitle} value={title} placeholder='Enter a title' />
          <input className="mb-2" onChange={handleTaskDesc} value={desc} placeholder='Enter a description' />
          <button className="btn" onClick={addTodoHandler}>Add Task</button>
        </span>
        <h5 className="card">Your Tasks</h5>
        <div>
          <TodoView todoList={todoList} />
        </div>
      </div>
    </div>
  </div>
);


}

export default App;