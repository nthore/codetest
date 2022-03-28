import {ThunkResult, StateActionType, ActionType} from "./types";
import {getJobs} from "../api/dataServices";

// Fetch Jobs action
export const fetchJobs = (url: string): ThunkResult<Promise<void>> => {
  return async (dispatch) => {
    try {
      const jobsJSON = await getJobs(url);
      dispatch(FetchJobsSuccess(jobsJSON));
    } catch (error) {
      console.log(error);
    }
  };
};

// Fetch Jobs action
export const search = (url: any): ThunkResult<Promise<void>> => {
  return async (dispatch) => {
    try {
      dispatch(searchSuccess(url));
    } catch (error) {
      console.log(error);
    }
  };
};

// Fetch Jobs Success
export const FetchJobsSuccess = (data: Array<any>): StateActionType => ({
  type: ActionType.FETCH_JOBS_SUCCESS,
  payload: data,
});

// Fetch Jobs Success
export const searchSuccess = (data: any): StateActionType => ({
  type: ActionType.SEARCH,
  payload: data,
});
