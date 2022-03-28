import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers/rootReducer";

// ACTION TYPES
export enum ActionType {
  FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS",
  SEARCH = "SEARCH",
}

interface FetchJobsSuccess {
  type: typeof ActionType.FETCH_JOBS_SUCCESS;
  payload: Array<any>;
}

interface search {
  type: typeof ActionType.SEARCH;
  payload: string;
}

export type StateActionType = FetchJobsSuccess | search;

export type ThunkResult<R> = ThunkAction<R, RootState, null, StateActionType>;
