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
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
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
                'Item ',
                app.options.length
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
