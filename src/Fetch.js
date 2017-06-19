import React from 'react';
import Promised from './Promised';

const createFetch = config => url =>
  global.fetch(url, config).then(res => res.json());

const Fetch = props => (
  <Promised
    getPromise={props =>
      (props.url
        ? Array.isArray(props.url)
            ? Promise.all(props.url.map(createFetch(props.config)))
            : createFetch(props.config)(props.url)
        : new Promise(() => {}))}
    {...props}
  >
    {props.children}
  </Promised>
);

export default Fetch;
