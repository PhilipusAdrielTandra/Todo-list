import React, { useState } from "react";

const TodoForm = ({setInput, todos, setTodos, input, setStatus}) => {
  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: input, completed: false, id: Math.random() * 1000},
      ]);
      setInput("");
    }
  const statusHandle = (e) => {
    setStatus(e.target.value);
  }
  return(
    <form>
      <input value={input} onChange={handleInput} type='text' className="todo-input"/>
      <button onClick={submitHandle} className='todo-button' type='submit'>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className='select'>
        <select onChange={statusHandle} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
export default TodoForm;
