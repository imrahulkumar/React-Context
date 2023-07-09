import {React, useContext} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CartContext from '../helper/CartContext';



 const Left = () => {
  const { cart, setCart } = useContext(CartContext);
 

  const addToCart = () => {
  const fruit = ["Apple", "Orange", "Mango", "Banana", "Guava"];
  const index = Math.floor(Math.random() * 4);
     setCart({
       cart: [...cart, fruit[index]]
     })
  }

     const removeFromCart = () => {
          setCart({
       cart: []
     })
  }


  return (
     <Stack direction="row" spacing={2}  mt={2} ml={2}>
      <Button variant="contained" onClick={addToCart}>Add</Button>
      <Button variant="contained" onClick={removeFromCart}>Remove All</Button>
      </Stack>
  )
}

export default Left;