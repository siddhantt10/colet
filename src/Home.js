import React from "react";
import "./Home.css";
import Header from "./component/Header";
import BsCarousel from "./component/BsCarousel";
import Products from "./component/Products";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [{ cart, user }] = useStateValue();
  return (
    <>
      <Header />
      {/* <div className='home'>
            <img 
            className='home__hero'
            src='hero-img-01.png' 
            alt='hero'
            />
        </div> */}

      <BsCarousel />

      {/* products */}
      <div id="home__product" className="home__product">
        <h1>latest listings</h1>
        <p>Explore our newly Listed products inside VIT bhopal...</p>

        <div className="home__row">
          <Products
            id="00001"
            title="Sony Headphones"
            price={990}
            image="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          />
          <Products
            id="00001"
            title="Sony Headphones"
            price={7990}
            image="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          />
          <Products
            id="00001"
            title="Sony Headphones"
            price={5990}
            image="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          />
          <Products
            id="00001"
            title="Sony Headphones"
            price={9900}
            image="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          />
        </div>
      </div>

      <div id="home__sell" className="home__sell">
        <img className="bg" src="sell-cta-img.png" alt="bg-img" />
        <div className="sell-content">
          <h1>Want to sell your things?</h1>
          <p>
            list your Item by filling this google form, we'll post your product
            after verification with in 6-hrs.
          </p>
          <a rel="noopener noreferrer" href="https://forms.gle/voTin3SviZmikfrW9" target="_blank">
          <Button className="list-btn" variant="outline-light" size="lg">
            List Item
          </Button>
          </a>
        </div>
      </div>
      <div className="home__mail">
        <img className="bg" src="newsLetter-cta.png" alt="bg-img" />
        <div className="mail-content">
          <h1>Get updates of Latest listings.</h1>
          <p>
            Sign-up to the COLET newsLetter and never miss the latest listings.
          </p>
          <Link to={!user && "/login"}> 
          <Button className="mail-btn" variant="outline-dark" size="lg">
            Sign-up
          </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
