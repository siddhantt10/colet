import React from 'react'
import "./Subtotal.css"
import Button from 'react-bootstrap/Button';
import { useStateValue } from '../StateProvider';
import { getCartTotal } from "../reducer"

function Subtotal() {

    // eslint-disable-next-line no-unused-vars
    const[{cart}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <h6>
            Subtotal ({cart.length} item(s)):
            <strong>₹{getCartTotal(cart)}</strong>
        </h6>

        <div className='checkout__btn'>
        <a rel="noopener noreferrer" href="https://forms.gle/cFoYrsiR84Hxeobi6" target="_blank">
        <Button variant="outline-dark">Proceed to Checkout</Button>
        </a>
        </div>
    </div>
  )
}

export default Subtotal