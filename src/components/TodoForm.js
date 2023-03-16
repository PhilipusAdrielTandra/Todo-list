import React, { useState } from "react";
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const TodoForm = ({setInput, todos, setTodos, input, setStatus}) => {
  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const submitHandle = async (e) => {
    e.preventDefault();
    // setTodos([
    //   ...todos, {text: input, completed: false, id: Math.random() * 1000},
    //   ]);
    //   setInput("");
    try {
      await addDoc(collection(db, 'todos'),{
        text: input,
        completed: false,
        created: Timestamp.now()
      })
    }catch (err){
      alert(err)
    }
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
