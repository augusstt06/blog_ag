import { combineReducers } from "redux";
import { counterReducer } from "./counter";

const rootReducer = combineReducers({
  counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
