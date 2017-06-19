import React from 'react';
import { render } from 'react-dom';

import { Fetch, Form, Link, history, styled } from '../../src';

const height = '2.5em';

const App = styled('div')`
	padding: 1em;
	padding-top: 4em;
	font-family: Roboto, sans-serif;
`;

const Header = styled('div')`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: indigo;
	color: white;
	padding-left: 1em;
	padding-right: 1em;
	display: flex;
	min-height: 64px;
	align-items: center;
	@media (max-width: 768px){
		background: pink;
	}
	@media (max-width: 320px){
		background: red;
	}
`;

const HeaderLink = styled(Link)`
	color: inherit;
	padding: 1em;
`;

const Fieldset = styled('fieldset')`
	padding: 1em;
	border: 1px solid #eee;
	border-radius: 2px;
`;

const Input = styled('input')`
  display: block;
  height: ${height};
  font-size: inherit;
  padding: 0 0.5em;
  margin-bottom: 1em;
  width: 100%;
`;

const Button = styled('button')`
  display: block;
  width: 100%;
  height: ${height};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: inherit;
  line-height: 1em;
  border: 0;
  background: indigo;
  color: white;
  border-radius: 2px;
  letter-spacing: 2px;
`;

const handleSubmit = formData =>
	new Promise(resolve => setTimeout(() => resolve(formData), 1500));

const showFile = (key, value) =>
	value instanceof File
		? {
				lastModified: value.lastModified,
				lastModifiedDate: value.lastModifiedDate,
				name: value.name,
				size: value.size,
				type: value.type,
			}
		: value;

const renderFieldset = (state, bind) =>
	<Fieldset style={{ opacity: state.loading ? 0.5 : 1 }}>
		<Input {...bind('name')} type="text" />
		<Input {...bind(['email', 0])} type="text" />
		<Input
			onChange={e =>
				bind(['profile', 'avatar']).onChange({
					target: {
						name: e.target.name,
						value: e.target.files[0],
					},
				})}
			type="file"
		/>
		<Button>Submit</Button>
		<pre>{console.log(state) || JSON.stringify(state, showFile, 2)}</pre>
	</Fieldset>;

const ReusableForm = props =>
	<div>
		<h1>Reusable Form Demo</h1>
		<Form
			onSubmit={handleSubmit}
			formData={{
				email: ['test@test.com'],
			}}
		>
			{renderFieldset}
		</Form>
	</div>;

const Box = styled('div')`
  padding: 1em;
`;

const mapList = props => (data, reload) =>
	<div>
		<ul>
			{data.map(
				(post, index) =>
					Array.isArray(post)
						? <li key={index}>{index}{mapList(props)(post)}</li>
						: <li key={post.id}>
								{post.title}
							</li>
			)}
		</ul>
		<Button onClick={e => reload(props)}>Reload</Button>
	</div>;

const AsyncList = props =>
	<Fetch
		onLoading={(props, cancel) =>
			<div>
				<p>Loading {props.url}...</p>
				<Button onClick={e => cancel()}>Cancel?</Button>
			</div>}
		onSuccess={mapList(props)}
		onCancel={(props, reload) =>
			<div>
				<p>Canceled</p>
				<Button onClick={e => reload(props)}>Reload?</Button>
			</div>}
		onError={(error, reload) =>
			<div>
				<p>
					Error!
				</p>
				<pre>
					{error.message}
				</pre>
				<Button onClick={e => reload(props)}>Reload?</Button>
			</div>}
		{...props}
	/>;

const ReusableFetch = props =>
	<div>
		<h1>Reusable Fetch Demo</h1>
		<Box>
			<h2>Multiple URL</h2>
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
			<h2>onSuccess</h2>
			<AsyncList url={'https://jsonplaceholder.typicode.com/posts'} />
		</Box>
		<Box>
			<h2>Cached</h2>
			<AsyncList url={'https://jsonplaceholder.typicode.com/posts'} cache />
		</Box>
		<Box>
			<h2>onError</h2>
			<AsyncList
				url={'https://jsonplaceholder.typicode.com/poss'}
				onError={(error, reload) =>
					<div>
						<p>
							Error!
						</p>
						<pre>
							{error.message}
						</pre>
						<Button
							onClick={e =>
								reload({
									...props,
									url: 'https://jsonplaceholder.typicode.com/posts',
								})}
						>
							Reload?
						</Button>
					</div>}
			/>
		</Box>
		<Box>
			<h2>onLoading</h2>
			<AsyncList />
		</Box>
		<Box>
			<h2>With Children</h2>
			<AsyncList url={'https://jsonplaceholder.typicode.com/posts'}>
				{(data, state, props) =>
					<pre style={{ whiteSpace: 'pre-wrap' }}>
						{JSON.stringify(data, null, 2)}
					</pre>}
			</AsyncList>
		</Box>
	</div>;

const renderApp = ({ history: { location: { pathname } } }) =>
	render(
		<App>
			<Header>
				<HeaderLink to="/">Reusable React Component</HeaderLink>
				<HeaderLink to="/form">
					Form
				</HeaderLink>
				<HeaderLink to="/fetch">
					Fetch
				</HeaderLink>
			</Header>
			{pathname === '/' ? <h1>Welcome to Reusable</h1> : null}
			{pathname === '/form' ? <ReusableForm /> : null}
			{pathname === '/fetch' ? <ReusableFetch /> : null}
		</App>,
		document.querySelector('#demo')
	);

renderApp({ history });

history.listen(() => renderApp({ history }));
