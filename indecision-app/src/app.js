console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
<div>
    <h1 id = "live">Saif Shovon</h1>
    <p>paragraph</p>
    <ol>
        <li>Saif</li>
        <li>Item Two2</li>
    </ol>
</div>

);
//first name

var templateTwo = (
    <div>
        <h1>Saif Shovon</h1>
        <p>age: 26</p>
        <p>Location: Dhaka</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
