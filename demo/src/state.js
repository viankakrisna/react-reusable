import { createState, history, dump, difference } from '../../src';

export const state = {
  history,
  counter: 0,
  todos: [],
  todosTextInput: '',
  addTodos: newTodo =>
    state.set({
      todos: state.todos.concat(newTodo),
      todosTextInput: '',
    }),
  decrement: (value = 1) =>
    state.set({
      counter: state.counter - value,
    }),
  increment: (value = 1) =>
    state.set({
      counter: state.counter + value,
    }),
};

export const connect = createState(state, (oldState, newState) => {
  console.log('BEFORE', dump(difference(newState, oldState)));
  console.log('AFTER', dump(difference(oldState, newState)));
});

history.listen(() => {
  state.set({ history: { ...history } });
});
