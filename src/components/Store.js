import { legacy_createStore as createStore } from "redux";
import productReducer from "./Reducer";

const store = createStore(productReducer)

export default store