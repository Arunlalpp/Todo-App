import React,{useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {
    const [todos,setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo, ...todos);
    };
  return (
    <div>
        <h1>What's the plans for today?</h1>
        <TodoForm onsubmit={addTodo} /> 
    </div>
  );
}

export default TodoList