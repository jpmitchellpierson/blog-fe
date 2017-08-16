import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

// reducer function take previous state and an action that 
// returns a new state object
export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_POSTS:
    // turn array of posts to object with 
    // id property as keys and posts as values
    // faster lookup for finding specific post
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}