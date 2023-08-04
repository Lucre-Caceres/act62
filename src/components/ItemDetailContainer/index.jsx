import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import styles from "./ItemDetailContainer.module.css"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [itemQuantity, setItemQuantity] = useState()
  const [product, setProduct] = useState([])
  const {id}=useParams();

  const getItem =async()=> {
    const result = await fetch("https://6499986479fbe9bcf83f923d.mockapi.io/ProyectoReact");
    const data= await result.json();
    const product=data.find((prod)=>prod.id==id);
    setProduct(product);
    
  }
  useEffect(() => {
    setTimeout(() =>  {
      getItem(); 
    }, 2000);
     
  }, []);
  
  const onAdd=(count, product)=>{
    alert ("agregaste " + count + " productos al carrito" + product);
    setItemQuantity(count);
    
    
  }

  return (
    <div>
    <ItemDetail 
    onAdd={onAdd}
    product={product} 
    id={id} />

    </div>
  )
}

export default ItemDetailContainer;