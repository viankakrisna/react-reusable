import React, { Fragment as F } from 'react';
import { connect } from './state';
import { AsyncList, Debug, Route } from '../../src';
import { Header, HeaderLink, Button, Card1 } from './styles';

const JSON_URL = 'https://jsonplaceholder.typicode.com/posts';
const WRONG_JSON_URL = 'https://jsonplaceholder.typicode.com/poss';

const urls = [
  JSON_URL,
  JSON_URL,
  JSON_URL,
  JSON_URL,
  JSON_URL,
  JSON_URL,
  JSON_URL,
];

const listComponents = {
  List: ({ children }) => <div>{children}</div>,
  Item: ({ item, children }) => (
    <Card1>
      {item ? (
        <F>
          <h1>{item.title}</h1>
          <div>{item.body}</div>
        </F>
      ) : null}
      {children}
    </Card1>
  ),
  ReloadButton: () => null,
};

const FetchExample = props => (
  <React.Fragment>
    <Header>
      <HeaderLink to="/">←</HeaderLink>
      <HeaderLink to="/fetch">
        <strong>Fetch</strong>
      </HeaderLink>
      <HeaderLink to="/fetch/multiple">multiple</HeaderLink>
      <HeaderLink to="/fetch/onSuccess">onSuccess</HeaderLink>
      <HeaderLink to="/fetch/cached">cached</HeaderLink>
      <HeaderLink to="/fetch/onError">onError</HeaderLink>
    </Header>
    <Card1>
      <Route pathname="/fetch/multiple">
        <h2>Multiple JSON_URL</h2>
        <AsyncList
          url={urls}
          components={listComponents}
          onLoading={props => <p>Loading {props.url.join(', ')}</p>}
        />
      </Route>
      <Route pathname="/fetch/onSuccess">
        <h2>onSuccess</h2>
        <AsyncList components={listComponents} url={JSON_URL} />
      </Route>
      <Route pathname="/fetch/cached">
        <h2>Cached</h2>
        <AsyncList url={JSON_URL} cache />
      </Route>
      <Route pathname="/fetch/onError">
        <h2>onError</h2>
        <AsyncList
          url={WRONG_JSON_URL}
          onError={(error, reload) => (
            <div>
              <p>Error!</p>
              <pre>{error.message}</pre>
              <Button
                onClick={e =>
                  reload({
                    ...props,
                    url: JSON_URL,
                  })
                }
              >
                Reload?
              </Button>
            </div>
          )}
        />
      </Route>
      <Route pathname="/fetch/onLoading">
        <h2>onLoading</h2>
        <AsyncList />
      </Route>
      <Route pathname="/fetch/children">
        <h2>With Children</h2>
        <AsyncList url={JSON_URL}>
          {(data, state, props) => <Debug it={data} />}
        </AsyncList>
      </Route>
    </Card1>
  </React.Fragment>
);

export default connect(FetchExample);
