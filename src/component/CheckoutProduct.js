import React from 'react'
import "./CheckoutProduct.css"
import Button from 'react-bootstrap/Button';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({id, title, image, price}) {
    // eslint-disable-next-line no-unused-vars
    const[{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "remove_from_cart",
            id: id,
        });
    }


  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt=""/>
        <div className='checkoutProduct__info'>
            <h2 className='checkoutProduct__title'>
                {title}
            </h2>
            <p className='checkoutProduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <Button onClick={ removeFromCart } variant="outline-dark">Remove from cart</Button>
        </div>
    </div>
  )
}

export default CheckoutProduct