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
    render(){
        return (
            <div>
                <button>What should I do?</button>
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
    render(){
        return (
            <div>
            {
                this.props.options.map((option) => <Option key = {option} optionText = {option}/>)
            }
                
                <Option />
            </div>
        );
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div>
                Add Option component here
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));