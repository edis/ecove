import React from 'react';

const Error = () => {
    return (
        <div className="ui negative message">
            <i className="close icon"/>
            <div className="header">
               We're sorry an error has occurred
            </div>
            <p>Please try to refresh the page and than search again</p>
        </div>
    );
};

export default Error;