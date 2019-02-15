export interface Money {
  value: number;
  currency: string;
}

export interface PriceAdjustment {
  amount: Money;
  code: string;
  description: string;
}

export interface Price {
  amount: Money;
  adjustments?: PriceAdjustment[];
}

export interface ProductPrices {
  minimalPrice?: Price;
  maximalPrice?: Price;
  regularPrice?: Price;
}

interface Product {
  name?: string;
  manufacturer?: number | string;
  price?: ProductPrices;
  special_price?: number;
  image?: string;
  sku?: string;
}

export default Product;
