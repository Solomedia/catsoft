import { adminApi } from './magentoApi';

export function searchProductsByField(field, value) {
  return adminApi
    .get(
      `/products?searchCriteria[filter_groups][0][filters][0][field]=${field}&searchCriteria[filter_groups][0][filters][0][value]=${value}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`
    )
    .then(res => res.data);
}
