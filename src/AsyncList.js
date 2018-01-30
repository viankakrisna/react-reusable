import React from 'react';
import Fetch from './Fetch';
const mapList = props => (data, reload) => (
  <div>
    <ul>
      {data.map(
        (post, index) =>
          Array.isArray(post) ? (
            <li key={index}>
              {index}
              {mapList(props)(post)}
            </li>
          ) : (
            <li key={post.id}>{post.title}</li>
          )
      )}
    </ul>
    <button onClick={e => reload(props)}>Reload</button>
  </div>
);

const AsyncList = props => (
  <Fetch
    onLoading={(props, cancel) => (
      <div>
        <p>Loading {props.url}...</p>
        <button onClick={e => cancel()}>Cancel?</button>
      </div>
    )}
    onSuccess={mapList(props)}
    onCancel={(props, reload) => (
      <div>
        <p>Canceled</p>
        <button onClick={e => reload(props)}>Reload?</button>
      </div>
    )}
    onError={(error, reload) => (
      <div>
        <p>Error!</p>
        <pre>{error.message}</pre>
        <button onClick={e => reload(props)}>Reload?</button>
      </div>
    )}
    {...props}
  />
);

export default AsyncList;
