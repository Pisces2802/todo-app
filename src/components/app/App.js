import Header from '../header/Header';
import InputForm from '../inputform/InputForm';
import './App.css';


function App() {
  return (
    <div className='app'>
      <header>
        <h1 className='todo-heading'>Todo App</h1>
      </header>
      <Header />
      <InputForm />
    </div>
  );
}

export default App;
