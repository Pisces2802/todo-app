import { useState } from 'react';
import Heading from '../heading/Heading';
import Header from '../header/Header';
import InputForm from '../inputform/InputForm';
import TodoList from './todolist/TodoList';
import './App.css';


function App() {

  const [todos, setTodos] = useState([
    {title: "Play 9ja bet 😁", 
    id: 1, 
    isCompleted: false},
  
  {title: "Go to the gym ⛹️‍♂️⛹️‍♂️", 
    id: 2,
    isCompleted: false},
  
  {title: "write some code 🧑‍💻", 
    id: 3,
    isCompleted: false}])


  return (

    <div className='app'>
      <Heading />
      <Header completed={4} total={8} />
      <InputForm />
      <TodoList todos={todos} />
    </div>

  );
}

export default App;
