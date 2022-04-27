import React  from "react";
import { useSelector, useDispatch } from "react-redux";

const Todo = (task,id) => {

    const dispatch = useDispatch();

    const todos = useSelector(store => store)

    function handleDelete(id) {
        dispatch({ type: "DELETE", id });
     
      }


    return (
       <div>
           
     
              <ul>
 <li>{task.task}  <button onClick={() => handleDelete(task.id)} >X</button></li>

              </ul>

 
           
           
          
       
        {/* <h1>{todos.description}</h1> */}
        </div>
    ) 
}

export default Todo