export const magentoGraphqlEndpoint = `${process.env.MAGENTO_API}/graphql`;
export const magentoRestUrl = `${process.env.MAGENTO_API}/index.php/rest/V1`;
export const customerTokenName = 'CUSTOMER_TOKEN';
export const magentoAdminToken = process.env.MAGENTO_ADMIN_TOKEN;
export const guestCartIdKeyName = 'cat_guest_token';
export const categoriesDataKeyName = 'cat_categories';
export const guestCartItemsKeyName = 'cat_guest_cart_items';
export const isBrowser = typeof window !== 'undefined';
export const payPalClient = {
  sandbox: `${process.env.PAYPAL_CLIENT_SANDBOX}`,
  production: `${process.env.PAYPAL_CLIENT_PRODUCTION}`
};
