import { GET_ALL_POSTS, GET_SINGLE_POST, SET_LOADING } from "../types";
import { createReducer } from "../redux";

export interface Comment {
  postId: number;
  body: string;
  id?: number;
}
export interface Post {
  id?: number;
  title: string;
  body: string;
  comments?: Comment[];
}
export interface RootState {
  posts: Post[] | null;
  post: Post;
  isLoading: boolean;
}

const initialState = {
  posts: null,
  post: null,
  isLoading: true
};

export default createReducer(initialState, {
  [GET_ALL_POSTS]: (state: RootState, action: any) => {
    return {
      ...state,
      posts: action.payload,
      isLoading: false
    };
  },
  [GET_SINGLE_POST]: (state: RootState, action: any) => {
    return {
      ...state,
      post: action.payload
    };
  },
  [SET_LOADING]: (state: RootState) => {
    return {
      ...state,
      isLoading: true
    };
  }
});
