console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
<div>
    <h1 id = "live">Saif Shovon</h1>
    <p>paragraph</p>
    <ol>
        <li>Item One1</li>
        <li>Item Two2</li>
    </ol>
</div>

);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
