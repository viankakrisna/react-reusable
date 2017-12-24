import React from 'react';
import { connect } from './state';
import { Center, Button, Card1 } from './styles';
const Counter = connect(state => (
  <Card1>
    <Center>
      <h1>{state.counter}</h1>
      <Button kind="primary" onClick={() => state.increment()}>
        Increment
      </Button>
      <Button onClick={() => state.decrement()}>Decrement</Button>
    </Center>
  </Card1>
));
export default Counter;
