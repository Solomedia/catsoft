import { createCustomer, CustomerSignUpInt } from './customerService';

function signUp(body: CustomerSignUpInt): Promise<string> {
  return createCustomer(body);
}

export { signUp };
