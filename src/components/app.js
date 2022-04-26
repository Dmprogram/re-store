import React, {Component} from "react";

import ErrorBoundry from "./error-boundry/error-boundry";

export default class App extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        return (
            <ErrorBoundry>
                
            </ErrorBoundry>
        );
    }

};
