import { SET_ALL_POSTS, SET_SINGLE_POST } from "../types";
import { createReducer } from "../redux";
import { ActionType } from "../actions/projects-actions";

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
  editMode?: boolean;
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
  [SET_ALL_POSTS]: (state: RootState, action: ActionType) => {
    return {
      ...state,
      posts: action.payload,
      isLoading: false
    };
  },
  [SET_SINGLE_POST]: (state: RootState, action: ActionType) => {
    return {
      ...state,
      post: action.payload
    };
  }
});
