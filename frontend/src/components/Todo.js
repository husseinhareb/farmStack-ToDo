import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoView from '../components/TodoView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, AppContainer, CardBody, TitleInput, DescriptionTextarea, AddButton } from "../styled-components/main-style";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data);
      })
      .catch(error => console.error(error));
  }, []);

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
    <Container>
      <AppContainer>
        <div className="list-group-item" style={{ borderRadius: "14px", background: "#99c1f1", margin: "10px" }}>
          <CardBody>
            <TitleInput onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Enter a title' maxLength={10} />
            <DescriptionTextarea onChange={(e) => setDesc(e.target.value)} value={desc} placeholder='Enter a description' cols={50} rows={3} />
            <AddButton onClick={addTodoHandler}>Add Task</AddButton>
            <TodoView todoList={todoList} setTodoList={setTodoList} />
          </CardBody>
        </div>
      </AppContainer>
    </Container>
  );
}
export default Todo;