import styles from "./Cart.module.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
const {cart, addItem,removeItem,clear,isIncart,getTotalItemQuantity,sumTotalCart}=useContext(CartContext);
const navigate=useNavigate();

const goToItemDetail=()=>{
  navigate('/');
}
  return (
    <>
      <h2>Cart</h2>  
        
      {cart.length===0 && 
         <div>
         <h4>Cart is empty</h4>
         <button onClick={goToItemDetail}>Volver</button>
         </div>
      }
      
      {cart?.length>0 && cart.map((product)=>(
          <div key={product.id}>
            <p className={styles.prodTitle} >{product.title}</p>
            <img className={styles.prodImage} src={product.image} />
            <p className={styles.prodQuantity} >qty: {getTotalItemQuantity}</p>
            <p className={styles.prodPrice} > USD:{product.price}</p>

            <div className={styles.cartActions}>
            <button onClick={()=>removeItem(product.id)}>-</button>
            <button onClick={()=>addItem(product.id)}>+</button>
            <button onClick={()=>clear(product.id)}>CLEAR</button>
          </div>
          <p>Total: {sumTotalCart} </p>

        </div>
      ))}
    
    </>
  )
}

export default Cart;