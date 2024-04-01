import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoView({ todoList, setTodoList }) {
  const [editingTodo, setEditingTodo] = useState(null);

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <div>
      {todoList.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          todoList={todoList}
          setTodoList={setTodoList}
          editingTodo={editingTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
}

export default TodoView;
