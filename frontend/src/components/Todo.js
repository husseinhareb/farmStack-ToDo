import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoView from '../components/TodoView';
import { GroupItem, Container, AppContainer, CardBody, TitleInput, DescriptionTextarea, AddButton } from "../styled-components/main-style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
        <GroupItem>
          <CardBody>
            <TitleInput onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Enter a title' maxLength={10} />
            <DescriptionTextarea onChange={(e) => setDesc(e.target.value)} value={desc} placeholder='Enter a description' cols={50} rows={3} maxLength={90} />
            <AddButton onClick={addTodoHandler}>
              <FontAwesomeIcon icon={faPlusCircle} /> Add Task
            </AddButton>
          </CardBody>
        </GroupItem>
        <TodoView todoList={todoList} setTodoList={setTodoList} />
      </AppContainer>
    </Container>
  );
}
export default Todo;