export const WarunkSchema = {
  name: 'Warunk',
  properties: {
    id: 'int',
    name: 'string',
    owner: 'string',
    phone: 'string',
    address: 'string',
    picture: 'data?',
    location: 'string',
  }
};

export const ProductsSchema = {
  name: 'Products',
  properties: {
  	id: 'int',
  	barcode: 'string',
    name: 'string',
    buy_price: 'float',
    sell_price: 'float',
    unit: 'string',
    time_stamp: 'date',
  }
};

export const TransactionSchema = {
  name: 'Transaction',
  properties: {
    id: 'int',
    invoice_no: 'int',
    product_id: 'int',
    quantity: 'float',
    unit: 'string',
    time_stamp: 'date',
  }
};

export const SummarySchema = {
  name: 'Summary',
  properties: {
    id: 'int',
    invoice_no: 'string',
    total: 'float',
    timestamp: 'date',
  }
};