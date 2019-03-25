import { customerApi, guestApi } from './magentoApi';
import { guestCartIdKeyName } from '../constants';

interface CartItem {
  sku: string;
  qty: number;
  quote_id: string;
}

interface GuestCartItemBody {
  cartItem: CartItem;
}

export function getCartsMine() {
  return customerApi({
    url: '/carts/mine'
  })
    .then(res => res.data)
    .catch(error => error);
}

export function createGuestCart() {
  return guestApi
    .post('/guest-carts')
    .then(res => {
      localStorage.setItem(guestCartIdKeyName, res.data);
      return res.data;
    })
    .catch(error => error);
}

export function addGuestCartItem(cartId: string, body: GuestCartItemBody) {
  return guestApi
    .post(`/guest-carts/${cartId}/items`, body)
    .then(res => res.data)
    .catch(error => error);
}

export function updateGuestCartItem(
  cartId: string,
  itemId: string,
  body: GuestCartItemBody
) {
  return guestApi
    .put(`/guest-carts/${cartId}/items/${itemId}`, body)
    .then(res => res.data)
    .catch(error => error);
}

export function deleteGuestCartItem(cartId: string, itemId: string) {
  return guestApi
    .delete(`/guest-carts/${cartId}/items/${itemId}`)
    .then(res => res.data)
    .catch(error => error);
}

export function getGuestCart(cartId: string) {
  return guestApi(`/guest-carts/${cartId}`)
    .then(res => res.data)
    .catch(error => error);
}

export function getGuestCartPaymentInformation(cartId: string) {
  return guestApi(`/guest-carts/${cartId}/payment-information`)
    .then(res => res.data)
    .catch(error => error);
}
