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
            'Saif'
        ),
        React.createElement(
            'li',
            null,
            'Item Two2'
        )
    )
);
//first name

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Saif Shovon'
    ),
    React.createElement(
        'p',
        null,
        'age: 26'
    ),
    React.createElement(
        'p',
        null,
        'Location: Dhaka'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
