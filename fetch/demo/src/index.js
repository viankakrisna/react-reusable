import React from 'react';
import { render } from 'react-dom';

import Fetch from '../../src';

const Box = props => (
	<div style={{ flex: '0 0 20%', padding: '1em' }}>
		{props.children}
	</div>
);

const mapList = props => (data, reload) => (
	<div><ul>
		{data.map(
			(post, index) =>
				(Array.isArray(post)
					? <li key={index}>{index}{mapList(props)(post)}</li>
					: <li key={post.id}>
							{post.title}
						</li>)
		)}
	</ul>
		<button onClick={e => reload(props)}>Reload</button>
	</div>
);

const AsyncList = props => (
	<Fetch
		onLoading={(props, cancel) => (
			<div>
				<p>Loading {props.url}...</p>
				<button onClick={e => cancel()}>Cancel?</button>
			</div>
		)}
		onSuccess={mapList(props)}
		onCancel={(props, reload) => (
			<div>
				<p>Canceled</p>
				<button onClick={e => reload(props)}>Reload?</button>
			</div>
		)}
		onError={(error, reload) => (
			<div>
				<p>
					Error!
				</p>
				<pre>
					{error.message}
				</pre>
				<button onClick={e => reload(props)}>Reload?</button>
			</div>
		)}
		{...props}
	/>
);

let Demo = props => (
	<div style={{ display: 'flex' }}>
		<Box>
			<h1>Multiple URL</h1>
			<AsyncList
				url={[
					'https://jsonplaceholder.typicode.com/posts',
					'https://jsonplaceholder.typicode.com/posts',
					'https://jsonplaceholder.typicode.com/posts',
					'https://jsonplaceholder.typicode.com/posts',
					'https://jsonplaceholder.typicode.com/posts',
					'https://jsonplaceholder.typicode.com/posts',
					'https://jsonplaceholder.typicode.com/posts',
				]}
				onLoading={props => <p>Loading {props.url.join(', ')}</p>}
			/>
		</Box>
		<Box>
			<h1>onSuccess</h1>
			<AsyncList url={'https://jsonplaceholder.typicode.com/posts'} />
		</Box>
		<Box>
			<h1>Cached</h1>
			<AsyncList url={'https://jsonplaceholder.typicode.com/posts'} cache />
		</Box>
		<Box>
			<h1>onError</h1>
			<AsyncList
				url={'https://jsonplaceholder.typicode.com/poss'}
				onError={(error, reload) => (
					<div>
						<p>
							Error!
						</p>
						<pre>
							{error.message}
						</pre>
						<button
							onClick={e =>
								reload({
									...props,
									url: 'https://jsonplaceholder.typicode.com/posts',
								})}
						>
							Reload?
						</button>
					</div>
				)}
			/>
		</Box>
		<Box>
			<h1>onLoading</h1>
			<AsyncList />
		</Box>
		<Box>
			<h1>With Children</h1>
			<AsyncList url={'https://jsonplaceholder.typicode.com/posts'}>
				{(data, state, props) => (
					<pre style={{ whiteSpace: 'pre-wrap' }}>
						{JSON.stringify(data, null, 2)}
					</pre>
				)}
			</AsyncList>
		</Box>
	</div>
);

render(<Demo />, document.querySelector('#demo'));

const injectStyle = style =>
	document.head
		.appendChild(document.createElement('style'))
		.appendChild(document.createTextNode(style));

injectStyle(
	`
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		line-height: 1.4;
	}	
`
);
