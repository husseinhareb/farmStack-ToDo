import axios from 'axios';
import React, { useState } from 'react';
import { IndvBtn, IndvTask, ButtonContainer } from '../styled-components/main-style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, index, todoList, setTodoList, editingTodo, handleEditTodo }) {
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [isEditing, setIsEditing] = useState(false);

  const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/todo/${title}`)
      .then(res => {
        console.log(res.data);
        setTodoList(todoList.filter(todo => todo.title !== title));
      })
      .catch(error => console.error(error));
  };

  const editTodoHandler = (title, newTitle, newDescription) => {
    axios.put(`http://localhost:8000/api/todo/${title}`, { title: newTitle, description: newDescription })
      .then(res => {
        console.log(res.data);
        setTodoList(todoList.map(todoItem => {
          if (todoItem.title === title) {
            return { ...todoItem, title: newTitle, description: newDescription };
          }
          return todoItem;
        }));
      })
      .catch(error => console.error(error));
  };

  const handleEditClick = () => {
    handleEditTodo(todo);
    setEditedTitle(todo.title);
    setEditedDescription(todo.description);
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleUpdateClick = () => {
    editTodoHandler(todo.title, editedTitle, editedDescription);
    handleEditTodo(null);
    setIsEditing(!isEditing);
  };

  return (
    <IndvTask>
      <div>
        {isEditing ? (
          <input 
          style={{
            "fontWeight":"bold",
            "width": "95%",
            "margin": "10px",
            "resize": "none",
            "border": "0px",
            "border-radius": "10px",
            "backgroundColor": "#4E937A",
            "outline": "none",
            "color": "#e9e9e9"
          }}
          value={editedTitle}
           onChange={handleTitleChange}
           maxLength={10} />
        ) : (
          <p style={{ marginLeft: "5px" }}><b>{index + 1}. {todo.title}</b></p>
        )}
        {isEditing ? (
          <textarea
            style={{
              "width": "95%",
              "margin": "10px",
              "resize": "none",
              "border": "0px",
              "border-radius": "10px",
              "backgroundColor": "#4E937A",
              "outline": "none",
              "color": "#e9e9e9"
            }}
            value={editedDescription}
            onChange={handleDescriptionChange}
            maxLength={90} />
        ) : (
          <p style={{ borderLeft: "2px solid", borderRightColor: "#e9e9e9", paddingLeft: "4px" }}>{todo.description}</p>
        )}
      </div>
      <ButtonContainer>
        <IndvBtn onClick={() => deleteTodoHandler(todo.title)} className="btn">
          <FontAwesomeIcon icon={faTrash} />
        </IndvBtn>
        <IndvBtn onClick={isEditing ? handleUpdateClick : handleEditClick} className="btn">
          <FontAwesomeIcon icon={isEditing ? faSave : faPenSquare} />
        </IndvBtn>
      </ButtonContainer>
    </IndvTask>
  );
}

export default TodoItem;
