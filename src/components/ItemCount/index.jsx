import { useState } from "react";
import styles from "./ItemCount.module.css"
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ItemCount=({ stock, initial, onAdd})=>{
  const [count, setCount] = useState(initial);  
  const {addItem}=useContext(CartContext);

  const suma=()=>{
      if(count>=stock){return;}
      setCount(count+1);
    } 
    
    const resta=()=>{
      if(count===1){return;}
      setCount(count-1);
    }
  
  return(
    <>  
    <div className={styles.buttonCounter}>
          <button type="button" onClick={resta}>- </button>
          <button>{count}</button>
          <button type="button" onClick={suma}>+ </button>
          <button type="button" onClick={()=>onAdd(count)} disabled={count>=stock}>Add to cart</button>
        </div>
      
    
    
    
    </>
  
  )
    
}
     

export default ItemCount;