import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

// reducer function take previous state and an action that 
// returns a new state object
export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      // ES5
      // const post = action.payload.data;
      // ...state returns all data from state object already been gathered
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // below is exact same as above but ES6
      // make new key from object in square brackets
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      // turn array of posts to object with 
      // id property as keys and posts as values
      // faster lookup for finding specific post
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}