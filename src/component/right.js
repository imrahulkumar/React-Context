import {React, useContext, useState} from 'react'
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import CartContext from '../helper/CartContext';




const Right = () => {
  const { cart } = useContext(CartContext);
 const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  const cartArr = ['apple', 'banana']


  return (
   <List dense={dense}>
     {
      cart.map((item, index)=> <ListItem>
                  <ListItemText
                    primary={item}
                    key={index}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>)
     }
            </List>
  )
}



export default Right