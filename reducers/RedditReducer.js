import { combineReducers } from 'redux';
import {
	REQUEST_POST_SUCCESS
} from '../actions/RedditActions.js';

export default function redditPosts(state = {
	loading: false,
	title: ""
}, action="") {
	switch(action.type) {
		case REQUEST_POST_SUCCESS:
			let title = action.data.data.children[0].data.title;
			return Object.assign({}, state, {
				loading: false,
				title: title
			});
		default:
			return state;
	}
}
