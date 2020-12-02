import React from 'react';
import './Home.scss';
import Ad from '../ad.jpg';
import Product from './Product';

import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  return (
    <div className='home'>
      <div className="home__container">
        <img
          className='home__container__ad'
          src={Ad}
          alt="logo.png"
        />


        <div className="home__container__row">
          <Product
            className='product'
            id={uuidv4()}
            title='Sapiens - A Brief History of the Human Kind'
            price={29.99}
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-abEwBCnVXHIvvu9WhC3iJa6QedOQzjgGytn9BMADIx2yk2OVmWpFo5yeBY&usqp=CAc'
            rating={5}
          />
          <Product
            className='product'
            id={uuidv4()}
            title='Amazon Kindle - Black'
            price={199.99}
            image='https://images-na.ssl-images-amazon.com/images/I/419i0JkdTHL._AC_SY400_.jpg'
            rating={4}
          />
          <Product
            className='product'
            id={uuidv4()}
            title='Tools Of Titans'
            price={39.99}
            image='https://img.wook.pt/images/tools-of-titans-timothy-ferriss/MXwxODgzMDk2N3wxNDU1NDIzNXwxNDg2NDI1NjAwMDAw/502x'
            rating={5}
          />
          <Product
            className='product'
            id={uuidv4()}
            title='AmazonBasics Expandable Softside Carry-On Spinner Luggage Suitcase'
            price={57.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81XR6UE42tL._AC_SL1500_.jpg'
            rating={4}
          />
        </div>

        <div className="home__container__row">
          <Product
            className='product'
            id={uuidv4()}
            title='Notebook Lenovo ideapad i7'
            price={399.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61-wz0UOqFL._AC_SX466_.jpg'
            rating={3}
          />
          <Product
            className='product'
            id={uuidv4()}
            title='PlayStation 5'
            price={1199.99}
            image='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/1/AmazonStores/ATVPDKIKX0DER/545e5f30e1dca63dfde3cfce0e1de095.w1500.h1500._CR0%2C0%2C1500%2C1500_SX750_SY750_.jpg'
            rating={5}
          />
          <Product
            className='product'
            id={uuidv4()}
            title='Amazon Fire TV Stick'
            price={40.99}
            image='https://cdn.pocket-lint.com/r/s/1200x/assets/images/140302-tv-review-amazon-fire-tv-stick-with-alexa-voice-remote-review-image1-u6rkp0dktg.jpg'
            rating={5}
          />
          <Product
            className='product'
            id={uuidv4()}
            title='AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver'
            price={24.99}
            image='https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL._AC_SL1500_.jpg'
            rating={4}
          />
        </div>

        <div className="home__container__row">
          <Product
            className='product'
            id={uuidv4()}
            title='Philips Smart TV LED 5K 499P9H Curved Monitor (499P9H/00)'
            price={799, 90}
            image='https://www.bechtle.com/shop/medias/5ccae4034c2f850b06795a82-900Wx900H-820Wx820H?context=bWFzdGVyfHJvb3R8NDkxNDd8aW1hZ2UvanBlZ3xoNDYvaDMyLzEwNjUxNTE0NzMyNTc0LmpwZ3w3ZGE1MjVmZTNhNTczOGExOGVjZDc3NmNjZmE0Mzc4Zjg2ZGMwOGRhNDExYTdhZmQwZDJhNTMwODZiNDIxNTFj'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
