import axios from 'axios';
import { magentoRestUrl, costumerTokenName } from '../constants';

const magentoApi = axios.create({
  baseURL: magentoRestUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(costumerTokenName)}`
  }
});

export default magentoApi;
