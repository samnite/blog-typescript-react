import { GET_PROJECT } from "../types";
import { createReducer } from "../redux";

export interface Post {
  post: any;
}
export interface RootState {
  posts: Post[];
  post: any;
}

const initialState = {
  posts: null,
  post: null
};

export default createReducer(initialState, {
  [GET_PROJECT]: (state: RootState, { payload }: any) => {
    return {
      ...state,
      project: payload,
      alert: null
    };
  }
});
