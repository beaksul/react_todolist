import { useState } from "react";
import { Link } from "react-router-dom";
import { debounce } from 'lodash';


function Main(){
  const [userName, setUserName] = useState();
  
  // const getName = (e) => {
  //   let $username_input = e.target.value;
  //   e.preventDefault();

  //   setUserName($username_input);
  //   localStorage.setItem('username', e.target.value);
  // }

  const getName = debounce((e) => {
    let $username_input = e.target.value;
    e.preventDefault();

    setUserName($username_input);
    localStorage.setItem('username', e.target.value);
  }, 300);

  // const getNameDebounce = debounce(getName, 300);

  const lengthCheck = (e) => {
    if(!userName){
      e.preventDefault();
      alert('이름을 입력해 주세요 :)');
    }
  }

  return(
    <div>
      <h1>이름을 입력하세요.</h1>
      <form>
        <input type="text" 
          placeholder="What's your name?" id="username_input"
          onChange={(e) => getName(e)}
        ></input>
        <Link to='/main/todo' onClick={lengthCheck}>
        <button>확인</button>
        </Link>
      </form>
    </div>
  )
}

export default Main;