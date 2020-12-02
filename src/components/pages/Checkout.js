import React from 'react';
import './Checkout.scss';

import Subtotal from '../Subtotal';
import CheckoutProduct from '../CheckoutProduct';
import { useStateValue } from '../../ContextApi/StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img
          className='checkout__left__ad'
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg"
          alt=""
        />
        <h3>Hello, {' '} {user?.email}</h3>
        <h2 className='checkout__left__title'>Your Shopping Basket</h2>
        {
          basket?.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              price={item.price}
              rating={item.rating}
              image={item.image}
              title={item.title}
            />
          ))
        }
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
