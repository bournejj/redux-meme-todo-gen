import React, {useState} from 'react';
import Todo from './Todo'
import { useSelector, useDispatch } from "react-redux";



const NewTodoForm = ({addItem, deleteItem}) => {
    const INITIAL_STATE = {
        title: '',
     
      
    }
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        addItem(formData.title)

    }
    
    const todos = useSelector(store => store)

    return (

   <div>
       {todos.todos.map(todo =>( 
       <Todo task={todo.task} id={todo.id}/>
       ))} 

<form onSubmit={handleSubmit}>
    <label htmlFor="title">Title</label>
    <input
    type="text"
    name="title"
    placeholder="title"
    value={formData.title}
    onChange={handleChange}
    />
  <button>Add Item</button>
</form>
<form>
    <button>De</button>
</form>
</div>

    )




}

export default NewTodoForm;