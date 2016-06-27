import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const REQUEST_POST_SUCCESS = 'REQUEST_POST_SUCCESS';
export const REQUEST_POST_FAILURE = 'REQUEST_POST_FAILURE';

export function requestPost(subreddit) {
	return {
		type: REQUEST_POSTS,
		subreddit
	};
}

export function requestPostSuccess(data) {
	return {type: REQUEST_POST_SUCCESS, data};
}

export function fetchPosts(subreddit) {
	return dispatch => {
		dispatch(requestPost(subreddit));
		return fetch(`http://www.reddit.com/r/${subreddit}.json`)
			.then(response => response.json())
			.then(json => dispatch(requestPostSuccess(json)))
	}
}
