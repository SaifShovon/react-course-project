'use strict';

console.log('App.js is running!');
//if statements
//ternary operators
//Logical and operator
//only render the subtitle (and p tag) if subtitle exist - logical and operator
//render new p tag - if options.length > 0 "Here are your options " "No Option"
// JSX - JavaScript XML

var app = {
    title: "React tutorial",
    subtitle: 'React is boss of front end',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options " : "No Option"
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
var user = {
    age: 28
};

var count = 0;
var addOne = function addOne() {
    console.log("AddOne");
};

var minusOne = function minusOne() {
    console.log("MinusOne");
};

var reset = function reset() {
    console.log("Reset");
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
