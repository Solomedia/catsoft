import React from 'react';

interface CartContextInt {
  total: string | number;
  quantity: string | number;
  subTotal: string | number;
  updateCartContext: (
    qty: number,
    product: any,
    total: string | number,
    isAdding: boolean
  ) => any;
  initCartContext: (
    subTotal: string | number,
    total: string | number,
    quantity: boolean
  ) => any;
}

const cartContextValues: CartContextInt = {
  subTotal: '',
  total: '',
  quantity: '',
  updateCartContext: (subTotal, isAdding) => ({ subTotal, isAdding }),
  initCartContext: (subTotal, total, quantity) => ({
    subTotal,
    total,
    quantity
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
