class IndecisionApp extends React.Component{
    render(){
        const title = 'Indeccision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Option1','Option2','Option3','Option4'];
        return(
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action />
                <Options options = {options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>

        );
        
    }

}

class Action extends React.Component {
    handlePick(){
        alert("hi");
    }
    
    render(){
        return (
            <div>
                <button onClick = {this.handlePick}>What should I do?</button>
                
            </div>
        );
    }

}

class Option extends React.Component{
    render(){
        return(
            <div>
            {this.props.optionText}
            </div>
        );
    }
}
class Options extends React.Component {
    handleRemoveAll(){
        alert("Remove ALL");
    }
    render(){
        
        return (
            <div>
            <button onClick = {this.handleRemoveAll }>Remove All</button>
            {
                this.props.options.map((option) => <Option key = {option} optionText = {option}/>)
            }
                
                <Option />
            </div>
        );
    }
}
//1.setup the form with text input and submit button
//2.wire up on submit
//3.handle Add option -> fetch the value typed ->if value ,the alert

class AddOption extends React.Component {
    handleAddoption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit = {this.handleAddoption}>
                    <input type = "text" name = "option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));