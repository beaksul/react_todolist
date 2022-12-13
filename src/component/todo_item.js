const TodoItem = ({todos, toggleTodo, deleteTodo}) => {

  const {id,text,done} = todos

  return(
    <div>
      <li className={done ? 'on' : ''}>
        <span onClick={()=>toggleTodo(id)}>
          {done ? 'O' : 'X'}
        </span>
        <span>{text}</span>
        <button onClick={()=>deleteTodo(id)}>삭제</button>
      </li>
    </div>
  )
}

export default TodoItem;