import React from 'react'
import Header from './component/Header';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './component/CheckoutProduct';
import "./Cart.css";
import Subtotal from './component/Subtotal';


function Cart() {

  const[{ cart }] = useStateValue();


  return (
    <>

      <Header />

      <div className='cart'>

      <div className='cart__left'>
        {cart?.length === 0 ? (
          <div className='cart__mt'>
            <h1>Cart Is Empty. 🛒</h1>
          </div>
        ):(
          <div>
            <h1 className='cart__yo'>Your Cart 🛒</h1>
            <div className='cart__product'>
            {cart.map(item =>(
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
            />
            ))} 
            </div>
            
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart__right">
          <h1>Your Total</h1>
          <Subtotal />
        </div>
      )}

      </div>    
    </>
  )
}

export default Cart;