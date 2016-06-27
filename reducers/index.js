import { combineReducers } from 'redux';
import redditPosts from './RedditReducer.js';

const rootReducer = combineReducers({redditPosts});

export default rootReducer;

