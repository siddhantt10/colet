import React from 'react'
import "./Product.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products({id, title, image, price}) {
  return (
    <div className='product'>

        <Card style={{ width: '20rem' }}>
          <Card.Img className='product__img' variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              ₹{price}
            </Card.Text>
            <Button variant="outline-dark">open</Button>
          </Card.Body>
        </Card>

    </div>
  )
}

export default Products