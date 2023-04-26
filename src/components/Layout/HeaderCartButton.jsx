import React, {useContext} from 'react'
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/CartContext';
import CartIcon from '../Cart/CartIcon';

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((currentNumber, item)=>{
    return currentNumber + item.amount;
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

export default HeaderCartButton
