import axios from "axios";
import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from "../Types";

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:2000/product/");

    dispatch({ type: GET_ALL_PRODUCTS, payload: response.data.products });
  } catch (error) {
    console.log(error);
  }
};

export const getOneProduct = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:2000/product/${id}`);
    console.log(response.data.product)
    navigate(`/${id}`);
    dispatch({ type: GET_ONE_PRODUCT, payload: response.data.product });

  } catch (error) {
    alert(error);
  }
};
