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


let count = 0;
const  addOne = () => {
    console.log("AddOne");
};

const minusOne = () =>{
    console.log("MinusOne");
};

const reset = () =>{
    console.log("Reset");
};

const templateTwo = (
    <div>
    <h1>Count: {count}</h1> 
    <button onClick = {minusOne}>-1</button>
    <button onClick = {addOne}>+1</button>
    <button onClick = {reset}>Reset</button>
    
    </div>
    
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
