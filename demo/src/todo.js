import React from "react";
import { Form } from "../../src";
import { Button, Input } from "./styles";
import { connect } from "./state";

const Todo = connect(state => (
  <div>
    <Form
      onSubmit={() =>
        state.todosTextInput &&
        state.addTodos({
          id: Date.now(),
          value: state.todosTextInput
        })}
    >
      <Input
        value={state.todosTextInput}
        onChange={e => state.set({ todosTextInput: e.target.value })}
      />

      <Button>Add todo</Button>
    </Form>
    <ul>{state.todos.map(todo => <li key={todo.id}>{todo.value}</li>)}</ul>
  </div>
));

export default Todo;
