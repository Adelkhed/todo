import React, { useState,useEffect} from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos'));
      
      if (savedTodos) {
        setTodos(savedTodos);
        
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = () => {
      if (newTodo.trim() === '') return;
  
      const newTask = {
        id: uuidv4(),
        text: newTodo,
        completed: false,
      };
  
      setTodos([...todos, newTask]);
      setNewTodo('');
    };
  
    const handleDeleteTodo = (id) => {
      const filteredTodos = todos.filter(todo => todo.id !== id);
      setTodos(filteredTodos);
    };
  
    const handleToggleComplete = (id) => {
      const updatedTodos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    };
  
    return (
      <div>
        <input
          className='control-form'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='btn btn-primary' onClick={addTodo}>Add</button>
        <div>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggleComplete={handleToggleComplete}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default TodoList;