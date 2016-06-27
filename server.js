import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './routes.js';
import expressHbs from 'express-handlebars';
import path from 'path';
import { Provider } from 'react-redux';
import rootStore  from './reducers/index.js';
const app = express();

// Change Default template engine to handlebars for res.render
app.engine('.hbs', expressHbs({
	'extname': '.hbs'
}));
app.set('views', path.join(__dirname));
app.set('view engine', '.hbs');

app.use(express.static('build'));

app.use(express.static(path.join(__dirname, 'bundle')));

app.use((req, res) => {
	const location = createLocation(req.url);
	match({routes, location}, (err, redirectLocation, renderProps) => {
		if (err) {
			console.error(err);
			return res.status(500).end('Internal server error');
		}
		if (!renderProps) return res.status(404).end('Not found.');

		//const InitialComponent = (
		//	<Provider store={rootStore()}>
		//		<RouterContext {...renderProps} />
		//	</Provider>
		//);
		//const componentHTML = renderToString(InitialComponent);
		return res.status(200).render('index');
	});
});

export default app;
