import * as api from '../api/index.js';

export const getProducts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: 'GET_PRODUCTS', payload: data });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
    }
  };
}

export const getCategories = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchCategories();
    dispatch({ type: 'GET_CATEGORIES', payload: data });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
    }
  };
}
