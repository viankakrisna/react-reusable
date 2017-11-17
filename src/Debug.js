import React from "react";

const getName = props => (props.name ? props.name + " " : "");

export default props =>
  React.createElement(
    "pre",
    props,
    getName(props) + JSON.stringify(props.it, null, 2)
  );
