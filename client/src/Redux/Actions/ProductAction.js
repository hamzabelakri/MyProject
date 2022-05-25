import axios from "axios";
import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT ,SEARCH_PRODUCT} from "../Types";

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
    navigate(`/product/${id}`);
    dispatch({ type: GET_ONE_PRODUCT, payload: response.data.product });

  } catch (error) {
    alert(error);
  }
};
export const searchProduct = (caracter) => async (dispatch) => {
 console.log(caracter)
 
  try {
    const response = await axios.post('http://localhost:2000/product/find',caracter);
    console.log(response)
    
    dispatch({ type: SEARCH_PRODUCT, payload: response.data.product });

  } catch (error) {
    console.log(error);
  }
};