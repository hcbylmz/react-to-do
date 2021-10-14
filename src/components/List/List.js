import "../List/List.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck } from '@fortawesome/free-solid-svg-icons'

function List({ todos, deleteItem, setComplete,check,setCheck}) {



 
  return (
    <div className="list-items">
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.isComplete?"completed":""}>
        
            <button className={"check-button"} onClick={() => {setComplete(index);
              setCheck(!check);}} >
             <FontAwesomeIcon icon={faCheck} className="check-icon"> </FontAwesomeIcon>

                   </button>
            {todo.text}
            <button onClick={() => deleteItem(index)} className="delete-item">
           x
            </button>
          </li>
        ))}
      </ul>
      <p> {todos.length} item(s) to do </p>
    </div>
  );
}

export default List;
