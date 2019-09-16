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
    count++;
    renderCounterApp();
};

const minusOne = () =>{
    count--;
    renderCounterApp();
};

const reset = () =>{
    count = 0;
    renderCounterApp();
};
const appRoot = document.getElementById('app');



const renderCounterApp = () =>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1> 
            <button onClick = {minusOne}>-1</button>
            <button onClick = {addOne}>+1</button>
            <button onClick = {reset}>Reset</button>
        </div>
        
    );
    ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();
