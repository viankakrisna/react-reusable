import React from "react";
import { render } from "react-dom";

import Component, { history } from "../../src";
let Demo = React.createClass({
    render() {
        return (
            <div>
                <h1>link-component Demo</h1>
                <Component to="/test">Test</Component>
            </div>
        );
    }
});

render(<Demo />, document.querySelector("#demo"));
