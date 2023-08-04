
import { text } from '@fortawesome/fontawesome-svg-core';
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/Navbar"
import Input from './components/input';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './contexts/CartContext';


const App = () => {

  const onChange=(event)=>{
    const value=event.target.value;

  }
  return (
    <div>
      <CartContextProvider>
      
        <Navbar />      
      
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/Home' element={<ItemListContainer />}/>
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
      </Routes>
      </CartContextProvider>
      
      

    </div>
  );
};

export default App;