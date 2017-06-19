import React from 'react';
import history from './history';

export default function Link({ to, ...props }) {
  return (
    <a
      href={to}
      {...props}
      onClick={e => {
        e.preventDefault();
        history.push(to);
        if (typeof props.onClick === 'function') {
          props.onClick();
        }
      }}
    />
  );
}
