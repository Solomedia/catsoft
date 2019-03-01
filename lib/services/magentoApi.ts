import axios from 'axios';
import {
  magentoRestUrl,
  customerTokenName,
  magentoAdminToken
} from '../constants';

const isBrowser = typeof window !== 'undefined';

const customerToken =
  (isBrowser && localStorage.getItem(customerTokenName)) ||
  'no customer token set';

export const customerApi = axios.create({
  baseURL: magentoRestUrl,
  headers: {
    Authorization: `Bearer ${customerToken}`
  }
});

export const adminApi = axios.create({
  baseURL: magentoRestUrl,
  headers: {
    Authorization: `Bearer ${magentoAdminToken}`
  }
});
