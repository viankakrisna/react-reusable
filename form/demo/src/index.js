import React from 'react';
import { render } from 'react-dom';

import Form from '../../src';

const handleSubmit = formData =>
  new Promise(resolve => setTimeout(() => resolve(formData), 2000));

const renderFieldset = (state, model) =>
  <fieldset style={{ opacity: state.loading ? 0.5 : 1 }}>
    <input {...model('name')} type="text" />
    <input {...model(['email', 0])} type="text" />
    <input {...model(['profile', 'data'])} type="text" />
    <button>Submit</button>
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </fieldset>

const Demo = props =>
  <div>
    <h1>form-component Demo</h1>
    <Form onSubmit={handleSubmit} formData={{
      email: ['test@test.com']
    }}>
      {renderFieldset}
    </Form>
  </div>;

render(<Demo />, document.querySelector('#demo'));
