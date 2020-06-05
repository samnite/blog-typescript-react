import { GET_ALL_POSTS, GET_SINGLE_POST } from "../types";
import { createReducer } from "../redux";

export interface Post {
  id?: number;
  title: string;
  body: string;
  comments?: string[];
}
export interface RootState {
  posts: Post[];
  post: Post;
}

const initialState = {
  posts: null,
  post: null
};

export default createReducer(initialState, {
  [GET_ALL_POSTS]: (state: RootState, action: any) => {
    return {
      ...state,
      posts: action.payload
    };
  },
  [GET_SINGLE_POST]: (state: RootState, action: any) => {
    return {
      ...state,
      post: action.payload
    };
  }
});
