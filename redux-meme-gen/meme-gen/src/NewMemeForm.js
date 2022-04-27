import React, {useState}  from "react";
import { useSelector, useDispatch } from "react-redux";
import Meme from "./Meme";

const NewMemeForm = ({addItem}) => {
    const dispatch = useDispatch();
    const meme = useSelector(store => store)
    const top = () => dispatch({type: 'TOP', payload: 'hello' })
    
 
        const INITIAL_STATE = {
            img: '',
            top: '',
            bottom: ''
           
        }
    
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
            
            addItem(formData.img, formData.top, formData.bottom)
    
        }
  
   


    return (

        <div>
     
           <Meme/>
           
            <form onSubmit={handleSubmit}>
            <label htmlFor="img">Img</label>
    <input
    type="text"
    name="img"
    placeholder="img"
    value={formData.img}
    onChange={handleChange}
    />
            
    <label htmlFor="top">Top</label>
    <input
    type="text"
    name="top"
    placeholder="top"
    value={formData.top}
    onChange={handleChange}
    />
    <label htmlFor="bottom">Bottom</label>
    <input
    type="text"
    name="bottom"
    placeholder="bottom"
    value={formData.bottom}
    onChange={handleChange}
    />
    <button>Submit</button>
         
</form>

        </div>
    )
}

export default NewMemeForm