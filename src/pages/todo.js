import { useState , useRef } from "react";
import TodoInput from "../component/todo_input";
import TodoItem from '../component/todo_item';
import '../css/style.scss';

function Todo(){
  const username = localStorage.getItem('username');
  const [todos, setTodos] = useState([]);

  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const id = useRef(0);

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
          id: id.current++,
          text: text,
          done: false,
      }
    ])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todos => todos.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ?
      {
        ...todo,
        done:!todo.done,
      }
      : todo
    ))
  }
  

  return(
    <div>
      <h1>{username}님 오늘도 행복한 하루 보내세요!</h1>
      <span>{year}/{month}/{day} {hours}:{minutes}</span>
      <TodoInput onAdd={onAdd}/>
      <ul>
        {
          todos.map((todos) => (
            <TodoItem
            key={todos.id}
            todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}
            />))
        }
      </ul>
    </div>
  )
}

export default Todo;