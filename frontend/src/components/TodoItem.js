import axios from 'axios';
import React from 'react';
import { IndvBtn, IndvTask, ButtonContainer } from '../styled-components/main-style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, todoList, setTodoList }) {
  const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/todo/${title}`)
      .then(res => {
        console.log(res.data);
        setTodoList(todoList.filter(todo => todo.title !== title));
      })
      .catch(error => console.error(error));
  };
  const editTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/todo/${title}`)
      .then(res => {
        console.log(res.data);
        setTodoList(todoList.filter(todo => todo.title !== title));
      })
      .catch(error => console.error(error));
  };
  return (
    <IndvTask>
      <div>
        <p>{todo.title}</p>
        <p>{todo.description}</p>
      </div>
      <ButtonContainer>
        <IndvBtn onClick={() => deleteTodoHandler(todo.title)} className="btn" >
          <FontAwesomeIcon icon={faTrash} />
        </IndvBtn>
        <IndvBtn onClick={() => editTodoHandler(todo.title)} className="btn" >
          <FontAwesomeIcon icon={faPenSquare} />
        </IndvBtn>
      </ButtonContainer>
    </IndvTask>

  );
}

export default TodoItem;
