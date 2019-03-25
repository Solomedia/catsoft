import React from 'react';
import Main from 'layouts/main';
import { getCategories } from 'lib/services/categoriesService';
import {
  categoriesDataKeyName,
  isBrowser,
  guestCartIdKeyName
} from 'lib/constants';
import { CartContext, CartContextInt } from 'contexts/CartContext';
import { updateGuestCartItem, getGuestCart } from 'lib/services/cartsService';

interface Props {
  categoriesData?: any;
}

interface State {
  cartContext: CartContextInt;
}

export default (Page, title = 'Catsoft') =>
  class DefaultPage extends React.Component<Props, State> {
    public static async getInitialProps(ctx) {
      let pageProps = {};
      let categoriesData;

      if (Page.getInitialProps) pageProps = await Page.getInitialProps(ctx);

      if (!isBrowser) {
        categoriesData = await getCategories();
      } else {
        // Save all necessary data in localStorage here to avoid unnecessary calls that may affect performance during navigation or page rendering
        if (!localStorage.getItem(categoriesDataKeyName)) {
          categoriesData = await getCategories();
          localStorage.setItem(
            categoriesDataKeyName,
            JSON.stringify(categoriesData)
          );
        } else {
          const categoriesDataValue = localStorage.getItem(
            categoriesDataKeyName
          );
          categoriesData = JSON.parse(categoriesDataValue);
        }
      }

      return {
        namespacesRequired: ['common', 'footer', 'header'],
        categoriesData,
        routeQuery: ctx.query,
        pageProps
      };
    }

    private updateCartContext = (
      qty: number,
      product: any,
      itemPrice: string,
      isAdding: boolean
    ) => {
      const guestCartId = localStorage.getItem(guestCartIdKeyName);
      this.setState(prevState => {
        if (!isAdding) {
          return {
            cartContext: {
              ...this.state.cartContext,
              subTotal: (
                Number(prevState.cartContext.subTotal) - Number(itemPrice)
              ).toFixed(2),
              quantity: Number(prevState.cartContext.quantity) - 1
            }
          };
        } else {
          return {
            cartContext: {
              ...this.state.cartContext,
              subTotal: (
                Number(prevState.cartContext.subTotal) + Number(itemPrice)
              ).toFixed(2),
              quantity: Number(prevState.cartContext.quantity) + 1
            }
          };
        }
      });

      const cartItemBody = {
        cartItem: {
          sku: product.sku,
          qty,
          quote_id: guestCartId
        }
      };

      updateGuestCartItem(guestCartId, product.item_id, cartItemBody);
    };

    private initCartContext = (subTotal, total, quantity) => {
      this.setState({
        cartContext: {
          ...this.state.cartContext,
          subTotal,
          total,
          quantity
        }
      });
    };

    public state = {
      cartContext: {
        subTotal: '',
        total: '',
        quantity: '',
        updateCartContext: this.updateCartContext,
        initCartContext: this.initCartContext
      }
    };

    public async componentDidMount() {
      // Update data in localStorage here
      const categoriesData = await getCategories();
      localStorage.setItem(
        categoriesDataKeyName,
        JSON.stringify(categoriesData)
      );

      if (localStorage.getItem(guestCartIdKeyName)) {
        const cartData = await getGuestCart(
          localStorage.getItem(guestCartIdKeyName)
        );

        localStorage.setItem('cat_cart_qty', cartData.items_qty);

        this.setState({
          cartContext: {
            ...this.state.cartContext,
            quantity: cartData.items_qty
          }
        });
      }
    }

    public render() {
      const { categoriesData } = this.props;
      const { cartContext } = this.state;

      return (
        <CartContext.Provider value={cartContext}>
          <Main categoriesData={categoriesData} title={title}>
            <Page {...this.props} />
          </Main>
        </CartContext.Provider>
      );
    }
  };
