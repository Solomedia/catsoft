import React from 'react';

interface CartContextInt {
  total: string | number;
  quantity: string | number;
  updateCartContext: (total: string | number, isAdding: boolean) => any;
}

const cartContextValues: CartContextInt = {
  total: '',
  quantity: '',
  updateCartContext: (total, isAdding) => ({ total, isAdding })
};

const CartContext = React.createContext(cartContextValues);

const withCartContext = Component => {
  return function Wrapper(props) {
    return (
      <CartContext.Consumer>
        {context => <Component {...props} context={context} />}
      </CartContext.Consumer>
    );
  };
};

export { CartContextInt, CartContext, withCartContext };
