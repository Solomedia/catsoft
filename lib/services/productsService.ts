import { adminApi } from './magentoApi';

export function searchProductsByField(field, value) {
  return adminApi
    .get(
      `/products?searchCriteria[filter_groups][0][filters][0][field]=${field}&searchCriteria[filter_groups][0][filters][0][value]=${value}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`
    )
    .then(res => res.data);
}

export function searchProductsByName(value, pageSize, currentPage) {
  return adminApi
    .get(
      `/products?searchCriteria[filter_groups][0][filters][1][field]=name&searchCriteria[filter_groups][0][filters][1][value]=%25${value}%25&searchCriteria[filter_groups][0][filters][1][condition_type]=like&searchCriteria[pageSize]=${pageSize}&searchCriteria[currentPage]=${currentPage}`
    )
    .then(res => res.data);
}

export function getProductBySku(sku) {
  return adminApi.get(`/products/${sku}`).then(res => res.data);
}
