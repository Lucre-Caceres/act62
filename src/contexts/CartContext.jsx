import { createContext, useState } from "react";

export const CartContext=createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addItem=(product,count)=>{
       
      const newObject = {
        item:product,
        count:count
      } 
      setCart([...cart,newObject]);
    }

    const removeItem=(id)=>{
      setCart((currentCart)=>{
        return currentCart.filter((product)=>product.id!==id);
      })
      
    }

    const clear=()=>{
    setCart([]);   
    };

    const isInCart=(id)=>{
      
      if (cart.some((product)=>{product.id===id})) {
        return true
      }else{
        return false
      }
    } 
    const sumTotalCart=cart.reduce((acc,product)=>acc+(product.price*product.quantity),0);
    
    const getItemQuantity = (id) => {
      return cart.find((product) => product.id === id)?.quantity || 0;
    }

    const getTotalItemQuantity = () => {
      return cart.reduce((acc, product) => acc + product.quantity, 0)
    }

 return (
    <CartContext.Provider value={{cart,addItem,removeItem,clear, isInCart, setCart, sumTotalCart, getItemQuantity, getTotalItemQuantity}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;