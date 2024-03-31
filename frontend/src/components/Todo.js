import axios from 'axios';
import React from 'react';

function TodoItem({ todo, todoList, setTodoList }) {
  const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/todo/${title}`)
      .then(res => {
        console.log(res.data);
        setTodoList(todoList.filter(todo => todo.title !== title));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <p>
        <span>{todo.title} : </span> {todo.description} 
        <button onClick={() => deleteTodoHandler(todo.title)} className="btn" >X</button>
        <hr></hr>
      </p>
    </div>
  );
}

export default TodoItem;
