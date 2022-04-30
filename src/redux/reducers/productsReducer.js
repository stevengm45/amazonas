import { typesProducts } from "../types/types";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesProducts.list:
      return {
        products: [...action.payload],
      };
    case typesProducts.add:
      return {
        products: [action.payload],
      };
    case typesProducts.delete:
      return {
        products: state.products.filter((p) => p.id !== action.payload),
      };
    case typesProducts.edit:
      return {
        ...state,
      };
    default:
      return state;
  }
};