import { combineReducers } from "redux";
import shopReducer from "../redux/reducers/shopReducer"
const rootReducer = combineReducers({shop : shopReducer});
 export default rootReducer;