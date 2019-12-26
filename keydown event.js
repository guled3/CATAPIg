//keydown event
class MyComponent extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    handleEnter() {
        this.setState({
            message: this.state.message + "You searched"
        });
    }
    handleKeyPress(event) {
        if(event.keyCode === 1) {
            this.handleEnter();
        }
    }
    render()
    return (
        <div>
        <h1>{this.state.message}</h1>
        </div>
    );
}
}