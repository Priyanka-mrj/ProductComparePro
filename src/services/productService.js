import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data.products;
};
