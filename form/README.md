# form-component

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Describe form-component here.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

Example:

```
import React from 'react';
import { render } from 'react-dom';

import Form from 'form-component';

let Demo = props => (
  <div>
    <h1>form-component Demo</h1>
    <Form
      onSubmit={formData =>
        new Promise(resolve => setTimeout(() => resolve(formData), 2000))}
    >
      {(state, model) => (
        <fieldset style={{opacity: state.loading ? 0.5 : 1}}>
          <input {...model('name')} type="text" />
          <input {...model(['email', 0])} type="text" />
          <input {...model(['profile', 'data'])} type="text" />
          <button>Submit</button>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </fieldset>
      )}
    </Form>
  </div>
);
render(<Demo />, document.querySelector('#demo'));

```