import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id)=>{

    }

    const cartItemAddHandler = (item)=>{

    }

    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => { 
            return <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)} />
         })
    }</ul>;

    const hideCartModal = () => {
        props.showCart(false);
    }
    return <Modal hideModal={hideCartModal}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={hideCartModal}>Close</button>
            {hasItems && <button className={classes.button} >Order</button>}
        </div>
    </Modal>
};

export default Cart;