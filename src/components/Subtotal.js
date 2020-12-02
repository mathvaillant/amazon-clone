import React from 'react';
import './Subtotal.scss';
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from '../ContextApi/StateProvider';
import { getBasketTotal } from '../ContextApi/reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className='subtotal__button'>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
