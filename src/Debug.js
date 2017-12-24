import React from 'react';

const getName = props => (props.name ? props.name + ' ' : '');

export default ({ it, ...props }) =>
  React.createElement(
    'pre',
    props,
    getName(props) + JSON.stringify(it, null, 2)
  );
