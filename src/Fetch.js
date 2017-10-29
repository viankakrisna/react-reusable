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
          if (isFunction(props.successHandler)) {
            props.successHandler(res)
          }
          return res
        }, (err) => {
          if (isFunction(props.errorHandler)) {
            props.errorHandler(err)
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
