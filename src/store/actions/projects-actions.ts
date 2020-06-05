import axios from "axios";
import { GET_ALL_POSTS, GET_SINGLE_POST, SET_LOADING } from "../types";
import { Post, RootState } from "../reducers/blog-reducer";
import { State } from "../store";

axios.defaults.baseURL = "https://bloggy-api.herokuapp.com/";

type DispatchPost = { type: string; payload?: Post | Post[] };

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
        payload: res.data.reverse()
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
export const addPost = (post: Post) => (
  dispatch: (dispatched: DispatchPost) => void,
  getState: () => State
) => {
  axios({
    method: "post",
    url: "/posts/",
    data: post
  })
    .then(res => {
      // update local posts
      const posts = [...getState().data.posts];
      posts.unshift(res.data);
      dispatch({
        type: GET_ALL_POSTS,
        payload: posts
      });
    })
    .catch(err => console.log(err.message));
};

// Delete Post from server
export const deletePost = (id: number) => (
  dispatch: (dispatched: DispatchPost) => void,
  getState: () => State
) => {
  axios
    .delete(`/posts/${id}`)
    .then(res => {
      // Update local posts
      const posts = [...getState().data.posts].filter(post => post.id !== id);
      dispatch({
        type: GET_ALL_POSTS,
        payload: posts
      });
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

// Add Comment to post
export const createComment = (comment: Comment) => (
  dispatch: (dispatched: DispatchPost) => void,
  getState: () => State
) => {
  axios({
    method: "post",
    url: `/comments/`,
    data: comment
  })
    .then(res => {
      // Update local comments of post
      const post = { ...getState().data.post };
      if (post.comments) {
        post.comments.push(res.data);
        dispatch({
          type: GET_SINGLE_POST,
          payload: post
        });
      }
    })
    .catch(err => console.log(err.message));
};
