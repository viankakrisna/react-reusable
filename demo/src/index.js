import React from "react";
import { render } from "react-dom";
import { App, Header, HeaderLink, Center } from "./styles";
import FormExample from "./form";
import FetchExample from "./fetch";
import TodoExample from "./todo";
import CounterExample from "./counter";
import { connect } from "./state";

const AppContainer = connect(
  ({
    history: { location: { pathname } },
    route = (path, component, exact) =>
      (exact ? path === pathname : pathname.match(new RegExp(path))) &&
      component()
  }) => (
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
      {route("/", () => <h1>Welcome to Reusable</h1>, true)}
      {route("/form", () => <FormExample />)}
      {route("/fetch", () => <FetchExample />)}
      {route("/counter", () => <CounterExample />)}
      {route("/todo", () => <TodoExample />)}
    </App>
  )
);

export default AppContainer;
