import React from 'react'
import "./Product.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useStateValue } from '../StateProvider';

function Products({id, title, image, price}) {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "add_to_cart",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      }
    })
  };


  return (
    <div className='product'>

        <Card style={{ width: '20rem' }}>
          <Card.Img className='product__img' variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              ₹{price}
            </Card.Text>
            <Button onClick={addToCart} variant="outline-dark">Add to cart</Button>
          </Card.Body>
        </Card>

    </div>
  )
}

export default Products