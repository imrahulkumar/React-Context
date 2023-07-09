import './App.css';
import Header from './component/header';
import Right from './component/right';
import Left from './component/left';
import Grid from '@mui/material/Grid';
import CartContext from './helper/CartContext';
import {useState} from 'react'

function App() {

const [cartInfo, setCart] = useState({
   cart:['Apple']
  });

  return (
    <>    
    <CartContext.Provider  value={{cart: cartInfo?.cart, setCart:setCart}}>
    <Header/>
    <div className='d-flex'>
      <Grid container spacing={2}>
         <Grid item xs={12} md={6}><Left/></Grid>
          <Grid item xs={12} md={6}> <Right/></Grid>
      </Grid>
    </div>
    </CartContext.Provider>
    </>

  );
}

export default App;
