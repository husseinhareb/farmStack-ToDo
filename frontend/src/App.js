import React, { useState, useEffect } from 'react';
import './App.css';
import TodoView from './components/TodoListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data);
      })
      .catch(error => console.error(error));
  }, []);

  // Post a todo
  const addTodoHandler = () => {
    if (!title.trim() || !desc.trim()) {
      alert("Title and description cannot be empty");
      return;
    }

    axios.post('http://localhost:8000/api/todo/', { title, description: desc })
      .then(res => {
        setTodoList(prevTodoList => [...prevTodoList, res.data]);
        setTitle('');
        setDesc('');
      })
      .catch(error => console.error(error));
  };

  const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/todo/${title}`)
      .then(res => {
        console.log(res.data);
        setTodoList(todoList.filter(todo => todo.title !== title));
      })
      .catch(error => console.error(error));
  };
  
  return (
    <div className="App" style={{ backgroundColor: "#4C5B61", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="list-group-item" style={{ backgroundColor: "#DBFCFF" }}>
        <div className="card-body">
          <span className="card-text">
            <input className="mb-2" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Enter a title' />
            <input className="mb-2" onChange={(e) => setDesc(e.target.value)} value={desc} placeholder='Enter a description' />
            <button className="btn" onClick={addTodoHandler}>Add Task</button>
          </span>
          <h5 className="card">Your Tasks</h5>
          <div>
            <TodoView todoList={todoList} setTodoList={setTodoList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
