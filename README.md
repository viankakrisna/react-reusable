# react-reusable

```npm install --save react-reusable```

or 

```yarn add react-reusable```
## What?
This is a set of React components that handles data fetching (&lt;Fetch /&gt;), posting (&lt;Form /&gt;), and navigation (&lt;Link /&gt;). The bread and butter of every web apps.

## Why?
I use this pattern a lot, and I want to reduce boilerplate of writing the implementation of data fetching and posting in React apps.

## Fetch Example:

```
import React from 'react'
import Fetch from 'react-reusable/lib/Fetch'

function Hello () {
  return (
    <div>
      <h1>Hello from React</h1> 
      <Fetch url={'https://api.github.com/user/repos'}>
        {data => <p>{data.message}</p>}
      </Fetch>
    </div>
  )
}

export default Hello
```

## Form Example:
```
import React from 'react'
import Form from 'react-reusable/lib/Form';

const handleSubmit = formData =>
  new Promise(resolve => setTimeout(() => resolve(formData), 1500));

const showFile = (key, value) =>
  value instanceof File
    ? {
        lastModified: value.lastModified,
        lastModifiedDate: value.lastModifiedDate,
        name: value.name,
        size: value.size,
        type: value.type,
      }
    : value;

const renderFieldset = (state, bind) =>
  <fieldset style={{ opacity: state.loading ? 0.5 : 1 }}>
    <input {...bind('name')} type="text" />
    <input {...bind(['email', 0])} type="text" />
    <input
      onChange={e =>
        bind(['profile', 'avatar']).onChange({
          target: {
            name: e.target.name,
            value: e.target.files[0],
          },
        })}
      type="file"
    />
    <button>Submit</button>
    <pre>
      {JSON.stringify(state, showFile, 2)}
    </pre>
  </fieldset>;

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
  ```

## Fetch - Advanced usage
You can find it in the demo folder
```
import React from 'react';
import { render } from 'react-dom';

import Fetch from 'react-reusable/lib/Fetch';

const Box = props => (
  <div style={{ float: 'left', width: `${100 / 4}%` }}>
    {props.children}
  </div>
);

const AsyncList = props => (
  <Fetch
    onLoading={() => <p>Loading...</p>}
    onSuccess={data => (
      <ul>
        {data.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    )}
    onError={(error, reload) => (
      <div>
        <p>
          Error!
        </p>
        <pre>
          {error.message}
        </pre>
        <button onClick={e => reload(props)}>Reload?</button>
      </div>
    )}
    {...props}
  />
);

let Demo = props => (
  <div>
    <Box>
      <h1>onSuccess</h1>
      <AsyncList url={'https://jsonplaceholder.typicode.com/posts'} />
    </Box>
    <Box>
      <h1>onError</h1>
      <AsyncList
        url={'https://jsonplaceholder.typicode.com/poss'}
        onError={(error, reload) => (
          <div>
            <p>
              Error!
            </p>
            <pre>
              {error.message}
            </pre>
            <button
              onClick={e =>
                reload({
                  ...props,
                  url: 'https://jsonplaceholder.typicode.com/posts',
                })}
            >
              Reload?
            </button>
          </div>
        )}
      />
    </Box>
    <Box>
      <h1>onLoading</h1>
      <AsyncList />
    </Box>
    <Box>
      <h1>With Children</h1>
      <AsyncList url={'https://jsonplaceholder.typicode.com/posts'}>
        {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
      </AsyncList>
    </Box>
  </div>
);

render(<Demo />, document.querySelector('#demo'));
```


