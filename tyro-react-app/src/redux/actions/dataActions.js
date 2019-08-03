import { SET_POSTS, LOADING_DATA, LIKE_POST, UNLIKE_POST, DELETE_POST } from "../types";
import axios from "axios";

// Get all posts
export const getPosts = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get('/posts')
      .then((res) => {
        dispatch({
          type: SET_POSTS,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: SET_POSTS,
          payload: {}
        });
      });
  };

// Like Post
export const likePost = postId => dispatch => {
  axios
    .get(`/post/${postId}/like`)
    .then(res => {
      dispatch({
        type: LIKE_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Unlike Post
export const unlikePost = postId => dispatch => {
    axios
      .get(`/post/${postId}/unlike`)
      .then(res => {
        dispatch({
          type: UNLIKE_POST,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };

// Delete Post
export const deletePost = postId => dispatch => {
    axios
      .delete(`/post/${postId}`)
      .then(() => {
        dispatch({
          type: DELETE_POST,
          payload: postId
        });
      })
      .catch(err => console.log(err));
  };