let visibility = false;

const toggleVisibility = () =>{
    visibility = !visibility
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {toggleVisibility}>
                {visibility ? 'Hide Deatils' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey ..These are some details for you!!!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));

}
render();