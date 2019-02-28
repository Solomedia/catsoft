import api from './magentoApi';

interface Customer {
  email: string;
  firstname: string;
  lastname: string;
}

interface CustomerSignUpInt {
  customer: Customer;
  password: string;
}

function createCustomer(body: CustomerSignUpInt): Promise<string> {
  return api.post('/customers', { body }).then(res => res.data);
}

export { createCustomer, CustomerSignUpInt };
