import React from 'react';
import isFunction from 'lodash/isFunction';
import Promised from './Promised';

const createFetch = config => url =>
  global.fetch(url, config).then(res => res.json());

const Fetch = props => (
  <Promised
    getPromise={props => {
      if (isFunction(props.handleLoading)) {
        props.handleLoading(props)
      }
      return (props.url
        ? Array.isArray(props.url)
          ? Promise.all(props.url.map(createFetch(props.config)))
          : createFetch(props.config)(props.url)
        : Promise.resolve()).then(res => {
          if (isFunction(props.handleSuccess)) {
            props.handleSuccess(res)
          }
          return res
        }, (err) => {
          if (isFunction(props.handleError)) {
            props.handleError(err)
            return err
          }
          throw err
        })
    }}
    {...props}
  >
    {props.children}
  </Promised>
);

export default Fetch;
