import React from "react";
import {db} from "../firebase"
import {doc, updateDoc, deleteDoc} from 'firebase/firestore'
const Todo = ({text, todo, todos, setTodos }) => {
  const handleDelete = async () => {
    // setTodos(todos.filter((el) => el.id !== todo.id));
    const todoDocRef = doc(db, "todos", todo.id)
    try {
      await deleteDoc(todoDocRef)
    } catch (err) {
      alert(err)
    }
  };
  const handleComplete =async () => {
    // setTodos(todos.map((item) => {
    //   if(item.id === todo.id){
    //     return {
    //       ...item, completed: !item.completed
    //     }
    //   }
    //   return item;
    // })
    const todoDocRef = doc(db, "todos", todo.id)
    try {
      await updateDoc(todoDocRef, {
        completed: !todo.data.completed
      })
    } catch (err) {
      alert(err)
    }
  };
  return (
    <div className="todo"> 
      <li className={`todo-item ${todo.data.completed ? "completed" : ''} `}>{text}</li>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;

