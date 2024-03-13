import { createStore } from "redux";
import bookingReducer from "./bookingReducer";


// Pass a Reducer Function  here
const store = createStore(bookingReducer)

export default store