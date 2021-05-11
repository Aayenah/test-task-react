import { BASE_URL } from '../../config/api';
import { logoutUser } from '../User/user.actions.logout';
import * as ACTIONS from './product.types';

export function fetchProductsRequest() {
  return {
    type: ACTIONS.FETCH_PRODUCTS_REQUEST,
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: ACTIONS.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function fetchProductsFailure(error) {
  return {
    type: ACTIONS.FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const res = await fetch(`${BASE_URL}/products/find`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch(fetchProductsSuccess(data));
      } else {
        const json = await res.json();
        if (json.message.includes('Invalid token')) {
          dispatch(logoutUser());
        } else {
          throw new Error(json.message);
        }
      }
    } catch (error) {
      if (error.toString().includes('TypeError')) {
        dispatch(fetchProductsFailure('Failed to connect to server'));
      } else {
        dispatch(fetchProductsFailure(error));
      }
    }
  };
}
