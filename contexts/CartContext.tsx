import React from 'react';

interface CartContextInt {
  total: string | number;
  quantity: string | number;
  subTotal: string | number;
  checkout: boolean;
  updateCartContext: (
    qty: number,
    product: any,
    total: string | number,
    isAdding: boolean
  ) => any;
  initCartContext: (
    subTotal: string | number,
    total: string | number,
    quantity: boolean,
    checkout: boolean
  ) => any;
}

const cartContextValues: CartContextInt = {
  subTotal: '',
  total: '',
  quantity: '',
  checkout: false,
  updateCartContext: (subTotal, isAdding) => ({ subTotal, isAdding }),
  initCartContext: (subTotal, total, quantity, checkout) => ({
    subTotal,
    total,
    quantity,
    checkout
  })
};

const CartContext = React.createContext(cartContextValues);

const withCartContext = Component => {
  return class Wrapper extends React.Component<any> {
    public static async getInitialProps(ctx) {
      let pageProps = {};

      if (Component.getInitialProps)
        pageProps = await Component.getInitialProps(ctx);

      return {
        ...pageProps
      };
    }
    public render() {
      return (
        <CartContext.Consumer>
          {context => <Component {...this.props} context={context} />}
        </CartContext.Consumer>
      );
    }
  };
};

export { CartContextInt, CartContext, withCartContext };
