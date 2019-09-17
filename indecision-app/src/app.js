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
    options : []
};

const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

const  onRemoveAll = () =>{
    app.options = [];
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options " : "No Option"}</p>
            <p>{app.options.length}</p>
            <button onClick = {onRemoveAll}>Remove All</button>
            <ol>
                <li>Saif</li>
                <li>Item {app.options.length}</li>
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name = "option"/>
                <button>Add Option</button>
            </form>
        </div>
        
        );
        ReactDOM.render(template, appRoot);
}

render();




