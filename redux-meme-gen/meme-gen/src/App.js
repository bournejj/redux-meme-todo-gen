import logo from './logo.svg';
import './App.css';
import NewMemeForm from './NewMemeForm';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const meme = useSelector(store => store)

  const addItem = (img, top, bottom) => {
    dispatch({type: 'IMG', payload: img})
    dispatch({type: 'TOP', payload: top })
    dispatch({type: 'BOTTOM', payload: bottom })

  }
  return (
    <div className="App">
      <NewMemeForm addItem={addItem}/>

    </div>
  );
}

export default App;
