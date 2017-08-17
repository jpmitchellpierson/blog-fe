import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducerPosts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  // all different forms in different components will assume
  // the formReducer is being applied to the form piece of state
  form: formReducer
});

export default rootReducer;
