import React from 'react';
import { render } from 'react-dom';

import Form from '../../src/Form';
import Fetch from '../../src/Fetch';
import Route from '../../src/Route';
import history from '../../src/history';
import {
  Box,
  Code,
  Pre,
  App,
  Header,
  Link,
  Fieldset,
  Input,
  Button,
  HeaderLink,
} from './styles';

import { showFile, handleSubmit } from './utils';

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
    <Pre>
      {JSON.stringify(state, showFile, 2)}
    </Pre>
  </Fieldset>;

const ReusableForm = props =>
  <div>
    <h1>Reusable Form Demo</h1>
    <Form
      onSubmit={handleSubmit}
      formData={{
        email: ['test@test.com'],
      }}
      children={renderFieldset}
    />
  </div>;

const mapList = props => (data, reload) =>
  <div>
    <ul>
      {data.map(
        (post, index) =>
          Array.isArray(post)
            ? <li key={index}>
                {index}
                {mapList(props)(post)}
              </li>
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
        <p>
          Loading {props.url}...
        </p>
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
        <p>Error!</p>
        <Pre>
          {error.message}
        </Pre>
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
        onLoading={props =>
          <p>
            Loading {props.url.join(', ')}
          </p>}
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
            <p>Error!</p>
            <Pre>
              {error.message}
            </Pre>
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
          <Pre style={{ whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(data, null, 2)}
          </Pre>}
      </AsyncList>
    </Box>
  </div>;

const renderApp = (props = {}) =>
  render(
    <App>
      <Header>
        <HeaderLink to="/">Reusable React Components</HeaderLink>
        <HeaderLink to="/form">Form</HeaderLink>
        <HeaderLink to="/fetch">Fetch</HeaderLink>
      </Header>
      <Route pathname="/">
        <div>
          <h1>Welcome to Reusable</h1>
          <p>This is a set of reusable react components</p>
          <p>Features:</p>
          <h2>
            Ajax using <Code>{'<Fetch />'}</Code> component
          </h2>
          <Code>import Fetch from 'react-reusable/lib/Fetch'</Code>
          <h2>
            Submitting a form using <Code>{'<Form />'}</Code> component
          </h2>
          <Code>import Form from 'react-reusable/lib/Form'</Code>
          <h2>
            Navigating history using <Code>{'<Link />'}</Code> component
          </h2>
          <Code>import Form from 'react-reusable/lib/Form'</Code>
        </div>
      </Route>
      <Route pathname="/form">
        <ReusableForm />
      </Route>
      <Route pathname="/fetch">
        <ReusableFetch />
      </Route>
    </App>,
    window.demo
  );

renderApp();

history.listen(() => renderApp());
