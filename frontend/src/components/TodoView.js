import React from 'react';
import TodoItem from './TodoItem';

export default function TodoView({ todoList, setTodoList }) {
  return (
    <div>
      <ul>
        {todoList.map(todo => (
          <TodoItem key={todo.title} todo={todo} todoList={todoList} setTodoList={setTodoList} />
        ))}
      </ul>
    </div>
  );
}
