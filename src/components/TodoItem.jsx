import React from 'react';

const TodoItem = ({ todo, handleToggleComplete, handleDeleteTodo }) => {
  return (
    <div className='row mb-4'>
     <div className='col-sm-2'> 
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
        </span>
      </div>
     <div className='col-sm-2'>
      <input className="form-check"
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleComplete(todo.id)}
      />
      </div>
      <div className='col-sm-2'>
      <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
