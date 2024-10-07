import reducer from "./reducer/reducer.jsx";
import { createStore } from "redux";

const store = createStore(reducer);

export default store;
