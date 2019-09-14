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
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } else {
        return 'Unknown';
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : "Annonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
