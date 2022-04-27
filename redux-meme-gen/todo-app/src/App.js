import logo from './logo.svg';
import './App.css';
import NewTodoForm from './NewTodoForm';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const todo = useSelector(store => store)

  const addItem = (title) => {
    dispatch({type: 'TITLE', payload: title})
    // dispatch({type: 'DESCRIPTION', payload: description })

  }
  const deleteItem = (id) => {
    dispatch({type: 'TITLE', payload: id})
    // dispatch({type: 'DESCRIPTION', payload: description })

  }

  return (
    <div className="App">
     <NewTodoForm addItem={addItem}/>
    </div>
  );
}

export default App;
