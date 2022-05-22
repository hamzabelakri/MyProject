import authReducer from "./authReducer";
import ProductReducer from "./ProductReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  authReducer: authReducer,
  ProductReducer: ProductReducer,
});
export default rootReducer;
