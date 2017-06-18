import React from 'react';
import { render } from 'react-dom';
import App from './App.js';

render(<App>Hello World</App>, document.querySelector('#demo'));

if (module.hot) {
	module.hot.accept('./App.js', () => {
		render(<App>Hello World</App>, document.querySelector('#demo'));
	});
}
