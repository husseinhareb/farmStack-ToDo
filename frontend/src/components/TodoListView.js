import React from 'react';
import Todo from './Todo';

export default function TodoView({ todoList, setTodoList }) {
  return (
    <div>
      <ul>
        {todoList.map(todo => (
          <Todo key={todo.title} todo={todo} todoList={todoList} setTodoList={setTodoList} />
        ))}
      </ul>
    </div>
  );
}
