import { adminApi } from './magentoApi';

export function getCategories() {
  return adminApi.get('/categories').then(res => res.data);
}
