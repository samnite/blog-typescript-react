import axios from "axios";
import { GET_ALL_POSTS, GET_SINGLE_POST, SET_LOADING } from "../types";
import { Post, RootState } from "../reducers/blog-reducer";
import { State } from "../store";

axios.defaults.baseURL = "https://bloggy-api.herokuapp.com/";

type DispatchPost = { type: string; payload?: Post };

// Get All Posts from server
export const getAllPosts = () => (
  dispatch: (dispatched: DispatchPost) => void
) => {
  axios
    .get("/posts")
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_ALL_POSTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err.message));
};

// Get Single Post from server
export const getSinglePost = (id: number) => (
  dispatch: (dispatched: DispatchPost) => void
) => {
  axios
    .get(`/posts/${id}?_embed=comments`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_SINGLE_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(err.message));
};

// Add Post on server
export const addPost = (post: Post) => (dispatch: never) => {
  axios({
    method: "post",
    url: "/posts/",
    data: post
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err.message));
};

// Delete Post from server
export const deletePost = (id: number) => (
  dispatch: never,
  getState: () => State
) => {
  const state = { ...getState() };
  axios
    .delete(`/posts/${id}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err.message));
};

// Update post on server
export const updatePost = (post: Post) => (
  dispatch: (dispatched: DispatchPost) => void
) => {
  axios({
    method: "put",
    url: `/posts/${post.id}`,
    data: post
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err.message));
};

// Create Comment
export const createComment = (post: Post) => (
  dispatch: (dispatched: DispatchPost) => void
) => {
  axios({
    method: "post",
    url: `/comments/`,
    data: post
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err.message));
};

export const setLoading = () => (
  dispatch: (dispatched: DispatchPost) => void
) => {
  dispatch({
    type: SET_LOADING
  });
};
