import { createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";

const intionalState ={}
const Middleware = [thunk]
const store = createStore( rootReducer,intionalState ,applyMiddleware(...Middleware))


export default store