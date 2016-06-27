import React, { Component } from 'react';
import styles from './test.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchPosts} from '../../actions/RedditActions'; //@TODO: Add resolve in webpack

class Dummy extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchPosts("askreddit");
	}

	render() {
		let {redditPosts} = this.props;
		return (
			<div className={styles['testClass']}>
				{redditPosts.title}
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		redditPosts: state.redditPosts
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchPosts: fetchPosts
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dummy);
