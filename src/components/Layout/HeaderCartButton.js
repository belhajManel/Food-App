import { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/card-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberCardItems = cartCtx.items.reduce((previousValue, item)=> {
        previousValue + item.amount;
    }, 0);

    return(
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className= {classes.badge}>{numberCardItems}</span>
    </button>
    )
};

export default HeaderCartButton;