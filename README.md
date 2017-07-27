# react-reusable

```npm install --save react-reusable```

or 

```yarn add react-reusable```

## Usage:

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

## Advanced usage
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


