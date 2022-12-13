import '../css/style.scss';
import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle } from "react-icons/io";

const TodoItem = ({todos, toggleTodo, deleteTodo}) => {

  const {id,text,done} = todos

  return(
    <div>
      <li className={done ? 'on' : ''}>
        <span onClick={()=>toggleTodo(id)}>
          {done ? <IoIosCheckmarkCircle size="25px" color="rgb(57, 192, 255)" className='done'/> : <IoIosCheckmarkCircleOutline size="25px" color="rgb(138, 218, 255)" className='yet'/>}
        </span>
        <span>{text}</span>
        <button onClick={()=>deleteTodo(id)}>삭제</button>
      </li>
    </div>
  )
}

export default TodoItem;