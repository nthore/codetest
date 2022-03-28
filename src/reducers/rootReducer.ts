import {combineReducers} from "redux";
import {state} from "./reducers";

export const rootReducer = combineReducers({
  state,
});

export type RootState = ReturnType<typeof rootReducer>;
