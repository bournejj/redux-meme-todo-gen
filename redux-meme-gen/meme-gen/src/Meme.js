import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import './meme.css'





const Meme = () => {
    const meme = useSelector(store => store)

    return (
        <div class="meme" src={meme.img}>
         <img src={meme.img} alt="Girl in a jacket" width="500" height="600"/>
        
  <p class="top">{meme.top}</p>
  <p class="bottom">{meme.bottom}</p>
  
</div>

        //    <div>
        // <h1>Meme Generator</h1>
        // <img src={meme.img} alt="Girl in a jacket" width="500" height="600"/>
        // <h2> {meme.top}</h2>
        // <h2>  {meme.bottom}</h2>
        // </div>
    
    )
}

export default Meme