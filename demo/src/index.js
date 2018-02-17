import React from "react";
import { render } from "react-dom";
import { App, Header, HeaderLink, Card1 } from "./styles";
import FormExample from "./form";
import FetchExample from "./fetch";
import TodoExample from "./todo";
import CounterExample from "./counter";
import {Route} from '../../src';
const AppContainer = () => (
  <App>
    <Header>
      <HeaderLink to="/">
        <strong>npm i react-reusable</strong>
      </HeaderLink>
      <HeaderLink to="/form">{`<Form />`}</HeaderLink>
      <HeaderLink to="/fetch">{`<Fetch />`}</HeaderLink>
      <HeaderLink to="/counter">Counter</HeaderLink>
      <HeaderLink to="/todo">To Do</HeaderLink>
    </Header>
    <Route pathname="/" exact>
    <Card1>
      <h1>Welcome to Reusable</h1>
      <p>
      {`
      This is a set of React components that handles data fetching (<Fetch />), posting (<Form />), and navigation (<Link /> and <Route />). The bread and butter of every web apps.
      `}
      </p>
      </Card1>
    </Route>
    <Route pathname="/form">
      <FormExample />
    </Route>
    <Route pathname="/fetch">
      <FetchExample />
    </Route>
    <Route pathname="/counter">
      <CounterExample />
    </Route>
    <Route pathname="/todo">
      <TodoExample />
    </Route>
  </App>
);

AppContainer.displayName = "AppContainer";

if (window.demo) {
  render(<AppContainer />, window.demo);
}

export default AppContainer;
