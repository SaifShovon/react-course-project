console.log('App.js is running!');
//if statements
//ternary operators
//Logical and operator
//only render the subtitle (and p tag) if subtitle exist - logical and operator
//render new p tag - if options.length > 0 "Here are your options " "No Option"
// JSX - JavaScript XML

const app = {
    title : "React tutorial",
    subtitle : 'React is boss of front end',
    options : ['One','Two']
};
const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options " : "No Option"}</p>
    <ol>
        <li>Saif</li>
        <li>Item Two2</li>
    </ol>
</div>

);
//first name
const user = {
    age:28
}
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }else{
        return 'Unknown';
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Annonymous"}</h1>
        {(user.age && user.age >= 18) && <p>age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
