import axios from 'axios';

const url = 'https://aveosoft-challenge-software.onrender.com';

export const fetchProducts = () => axios.get(url + '/products');
export const fetchCategories = () => axios.get(url + '/categories');
