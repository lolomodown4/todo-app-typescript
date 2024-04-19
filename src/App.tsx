import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import Title from './components/Title';

import Todo from "./TodosArrayInterface/Todo"


const App = () => {

  const [todo_input, setTodo_input] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div className="App">
    
       <Title/>
       <InputField todo_input={todo_input} setTodo_input={setTodo_input} todos={todos} setTodos={setTodos}/> 
       <TodoList todos={todos} setTodos={setTodos} />
     
    </div>
  );
}

export default App;
