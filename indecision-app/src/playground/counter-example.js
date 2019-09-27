
class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0,
            name : "Saif"
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count +1,
                name : "Saif"
            };
        });
        //this.state.count = this.state.count +1;
        //console.log(this.state.count);
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count - 1,
                name : "Noman"
            };
            
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                count : 0,
                name : "Tusher"
            } 
        });
    }
    render(){
        return(
            <div>
            {this.state.name}
                <h1>Count: {this.state.count}</h1>
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