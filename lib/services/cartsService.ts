import api from './magentoApi';

function getCartsMine() {
  return api({
    url: '/carts/mine'
  }).then(res => res.data);
}

export { getCartsMine };
