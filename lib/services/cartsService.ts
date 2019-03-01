import { customerApi } from './magentoApi';

function getCartsMine() {
  return customerApi({
    url: '/carts/mine'
  }).then(res => res.data);
}

export { getCartsMine };
