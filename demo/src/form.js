import React from 'react';
import { Form, Debug } from '../../src';
import { Fieldset, Input, Button, Card1 } from './styles';

const handleSubmit = formData =>
  new Promise(resolve => setTimeout(() => resolve(formData), 1500));

const renderFieldset = (state, bind) => (
  <Fieldset style={{ opacity: state.loading ? 0.5 : 1 }}>
    <Input {...bind('name')} placeholder="Name" type="text" />
    <Input {...bind(['email', 0])} type="text" />
    <Input
      onChange={e =>
        bind(['profile', 'avatar']).onChange({
          target: {
            name: e.target.name,
            value: e.target.files[0],
          },
        })
      }
      type="file"
    />
    <Button kind="primary">Submit</Button>
    <Debug it={state} />
  </Fieldset>
);

const ReusableForm = props => (
  <Card1>
    <h1>Reusable Form Demo</h1>
    <Form
      onSubmit={handleSubmit}
      formData={{
        email: ['test@test.com'],
      }}
      children={renderFieldset}
    />
  </Card1>
);

export default ReusableForm;
