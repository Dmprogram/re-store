import React from "react";

import './error-indicator.css';
import icon from './error.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt='error icon'/>
            <span className="boom">BOOM!</span>
            <span>
                something has gone wrong
            </span>
            <span>
                (but we fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;