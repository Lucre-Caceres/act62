
import { useContext, useState } from "react";
import ItemCount from "../ItemCount";
import styles from "./ItemDetail.module.css"
import { Link } from "react-router-dom";

const ItemDetail = ({product, onAdd}) => {
  
  
  return (

    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={product.pictureURL} alt={prod.title} ></img>
      <div className={styles.itemContent}>
        <p className={styles.itemTitle}>{product.title}</p>
        <p className={styles.itemDescription}>{product.description}</p>
        <p className={styles.itemStock}>qty: {product.stock}</p>
        <p className={styles.itemPrice}>USD:{product.price}</p>
      </div>
      
      <ItemCount    
         stock={product.stock}
         initial={1}
         onAdd={onAdd}
         /> 
         
     <Link to="/cart">  
      <button type="button" className={styles.finishBuying}>Finish Buying</button>
    </Link>    
    </div>
  )
}

export default ItemDetail;