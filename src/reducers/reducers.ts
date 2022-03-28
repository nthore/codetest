import {StateActionType, ActionType} from "../actions/types";

const initialUserState = {
  jobs: [],
  query: [],
};

export const state = (state = initialUserState, action: StateActionType) => {
  switch (action.type) {
    case ActionType.FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
      };
    case ActionType.SEARCH:
      return {
        ...state,
        query: action.payload,
      };
  }
  return state;
};
