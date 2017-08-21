import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=FSDKhffcdFHE123';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}


// values object will be the actual blogpost i.e. title, categories, content
export function createPost(values, callback) {
  // only run the callback once the post has been created successfully
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  
  return {
    type: CREATE_POST,
    payload: request
  };
}