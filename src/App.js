import './App.css';
import React, {useState, useEffect} from 'react';
import Name from './components/Name';
import Title from './components/Title';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandle();
  }, [todos, status]);

  const filterHandle = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break; 
    }
  }
   return (
    <div className="App">
      <header>
      <Name name='Philipus Adriel Tandra' id='2502031715' class='L4BC'></Name>
      </header>
      <Title></Title>
      <TodoForm input={input} todos={todos} setTodos={setTodos} setInput={setInput} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} key={todos.id} text={todos.text} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}
export default App;
