import { Route, IndexRoute, Router, browserHistory  } from 'react-router'
import React, { Component } from 'react';
import Dummy from './components/Dummy/Dummy.js';
import { Provider } from 'react-redux';

import configureStore  from './store/configureStore.js';
const store = configureStore();

class App extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

let Routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Dummy}/>
			</Route>
		</Router>
	</Provider>
);
export default Routes;
