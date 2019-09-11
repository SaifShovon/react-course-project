'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { id: 'live' },
        'Saif Shovon'
    ),
    React.createElement(
        'p',
        null,
        'paragraph'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One1'
        ),
        React.createElement(
            'li',
            null,
            'Item Two2'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
