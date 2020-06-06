import axios from "axios";
import { SET_ALL_POSTS, SET_SINGLE_POST } from "../types";
import { Comment, Post } from "../reducers/blog-reducer";
import { State } from "../store";

axios.defaults.baseURL = "https://bloggy-api.herokuapp.com/";

export type ActionType = { type: string; payload?: Post | Post[] | boolean };

// Get All Posts from server
export const getAllPosts = () => (
  dispatch: (dispatched: ActionType) => State
) => {
  axios
    .get("/posts")
    .then(res => {
      const posts = res.data.map((post: Post) => ({
        ...post,
        editMode: false // Needed to edit posts
      }));
      dispatch({
        type: SET_ALL_POSTS,
        payload: posts.reverse()
      });
    })
    .catch(err => console.log(err.message));
};

// Get Single Post from server
export const getSinglePost = (id: number) => (
  dispatch: (dispatched: ActionType) => State
) => {
  axios
    .get(`/posts/${id}?_embed=comments`)
    .then(res => {
      dispatch({
        type: SET_SINGLE_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(err.message));
};

// Add Post on server
export const addPost = (post: Post) => (
  dispatch: (dispatched: ActionType) => State,
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
        type: SET_ALL_POSTS,
        payload: posts
      });
    })
    .catch(err => console.log(err.message));
};

// Delete Post from server
export const deletePost = (id: number) => (
  dispatch: (dispatched: ActionType) => State,
  getState: () => State
) => {
  axios
    .delete(`/posts/${id}`)
    .then(() => {
      // Update local posts
      const posts = [...getState().data.posts].filter(post => post.id !== id);
      dispatch({
        type: SET_ALL_POSTS,
        payload: posts
      });
    })
    .catch(err => console.log(err.message));
};

// Update post on server
export const updatePost = (post: Post) => (
  dispatch: (dispatched: ActionType) => State,
  getState: () => State
) => {
  axios({
    method: "put",
    url: `/posts/${post.id}`,
    data: post
  })
    .then(res => {
      const posts = [...getState().data.posts];
      const index = posts.findIndex(changedPost => changedPost.id === post.id);
      posts[index] = { ...res.data, editMode: false };
      dispatch({
        type: SET_ALL_POSTS,
        payload: posts
      });
    })
    .catch(err => console.log(err.message));
};

// Add Comment to post
export const createComment = (comment: Comment) => (
  dispatch: (dispatched: ActionType) => State,
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
          type: SET_SINGLE_POST,
          payload: post
        });
      }
    })
    .catch(err => console.log(err.message));
};

// Change edit post mode
export const setEditMode = (id: number, mode: boolean) => (
  dispatch: (dispatched: ActionType) => State,
  getState: () => State
) => {
  const posts = [...getState().data.posts];
  const index = posts.findIndex(post => post.id === id);
  posts[index].editMode = mode;
  dispatch({
    type: SET_ALL_POSTS,
    payload: posts
  });
};
