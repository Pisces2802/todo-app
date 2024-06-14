import { useState } from 'react';
import Heading from '../heading/Heading';
import Header from '../header/Header';
import InputForm from '../inputform/InputForm';
import TodoList from '../todolist/TodoList';
import data from '../../data/data';
import './App.css';


function App() {

  const [todos, setTodos] = useState(data)

  const completedTodos = 
      todos.filter((todo) => {
       return todo.isCompleted === true 
      }).length




const totalTodos = todos.length

  return (

    <div className='app'>
      <Heading />
      <Header completed={completedTodos} total={totalTodos} />
      <InputForm  setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>

  );
}

export default App;
