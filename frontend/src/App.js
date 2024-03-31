import React, { useState, useEffect } from 'react';
import './App.css';
import TodoListView from './components/TodoListView';
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



  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="App"
        style={{
          borderRadius: "14px",
          background: "#E9E9E9",
          boxShadow: "inset 5px 5px 20px #aaaaaa,inset -5px -5px 20px #ffffff",
          "height": "600px", "width": "350px"
        }}>
        <div className="list-group-item"
          style={{
            borderRadius: "14px",
            background: "#99c1f1",
            "margin": "10px"
          }}>
          <div className="card-body d-flex flex-column align-items-center">
            <input className="mb-2" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Enter a title' maxLength={10} style={{ "width": "120px" }} />
            <input className="mb-2" onChange={(e) => setDesc(e.target.value)} value={desc} placeholder='Enter a description' />
            <button className="btn" onClick={addTodoHandler}>Add Task</button>
            <div>
              <TodoListView todoList={todoList} setTodoList={setTodoList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
