export default (state = { products: [], categories: [] }, action: any) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
};

