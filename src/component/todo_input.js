import { useState, useRef } from "react";


const TodoInput = ({onAdd}) => {

  const textRef = useRef();
  const [text,setText] = useState('');

  const changeInput = (e) => {
      const {value} = e.target;
      setText(value);
  }

  const onSubmit = (e) => {
      e.preventDefault();

      if(!text) return; // text가 비었으면 종료

      onAdd(text);

      setText('');
      textRef.current.focus();
  }

  return(
    <div>
      <form onSubmit={onSubmit}>
        <input 
          id="todo-input" 
          type="text" 
          placeholder="입력하세요."
          value={text}
          onChange={changeInput} 
          ref={textRef}
        ></input>
        <button>입력</button>
      </form>
    </div>
  )
};

export default TodoInput;