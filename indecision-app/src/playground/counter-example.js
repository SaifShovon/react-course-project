class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleAddOne(){
        console.log("Handle add One");
    }
    handleMinusOne(){
        console.log("Handle Minus One");
    }
    handleReset(){
        console.log("Handle Reset");
    }
    render(){
        return(
            <div>
                <h1>Count:</h1>
                <button onClick ={this.handleAddOne}>+1</button>
                <button onClick ={this.handleMinusOne}>-1</button>
                <button onClick ={this.handleReset}>Reset</button>
            </div>
        );
    }
}

//create three method : handleAddOne,handleMinusone,handleReset
//use console.log to print method name
//Wire op onClick & bind in the constructor

ReactDOM.render(<Counter />,document.getElementById("app"));