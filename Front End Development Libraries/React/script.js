const JSX = <div>
    <p></p>
</div>
/*********************************************************************************** */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // Change code below this line
        console.log("Message before Mount");
        // Change code above this line
    }
    render() {
        return <div />
    }
};

/*********************************************************************************** */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2000);
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <h1>Active Users: {this.state.activeUsers} </h1>
                {/* Change code above this line */}
            </div>
        );
    }
}
/*********************************************************************************** */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    // Change code above this line
    handleEnter() {
        this.setState((state) => ({
            message: state.message + 'You pressed the enter key! '
        }));
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
};

/*********************************************************************************** */

class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        // Change code below this line
        if (nextProps.value % 2 == 0)
            return true;
        else
            return false;
        // Change code above this line
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1>{this.props.value}</h1>;
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        );
    }
}

/*********************************************************************************** */

class Colorful extends React.Component {
    render() {
        return (
            <div style={{ color: "red", fontSize: 72 }}>Big Red</div>
        );
    }
};

/*********************************************************************************** */

const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple"
}
// Change code above this line
class Colorful extends React.Component {
    render() {
        // Change code below this line
        return (
            <div style={styles}>Style Me!</div>
        );
        // Change code above this line
    }
};

/*********************************************************************************** */

const inputStyle = {
    width: 235,
    margin: 5
};

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            randomIndex: ''
        };
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: ''
            });
        }
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];
        const answer = possibleAnswers[this.state.randomIndex]; // Change this line
        return (
            <div>
                <input
                    type='text'
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                />
                <br />
                <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
                <br />
                <h3>Answer:</h3>
                <p>
                    {/* Change code below this line */}
                    {answer}
                    {/* Change code above this line */}
                </p>
            </div>
        );
    }
}

/*********************************************************************************** */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display
        }));
    }
    render() {
        // Change code below this line
        if (this.state.display) {

            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>


                    <h1>Displayed!</h1>

                </div>
            );
        }
        else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                </div>
            );
        }
    }
};

/*********************************************************************************** */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState(state => ({
            display: !state.display
        }));
    }
    render() {
        // Change code below this line
        return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                {this.state.display && <h1>Displayed!</h1>}
            </div>
        );
    }
};

/*********************************************************************************** */

const inputStyle = {
    width: 235,
    margin: 5
};

class CheckUserAge extends React.Component {
    constructor(props) {
        super(props);
        // Change code below this line
        this.state = {
            input: '',
            userAge: ''
        }

        // Change code above this line
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value,
            userAge: ''
        });
    }
    submit() {
        this.setState(state => ({
            userAge: state.input
        }));
    }
    render() {
        const buttonOne = <button onClick={this.submit}>Submit</button>;
        const buttonTwo = <button>You May Enter</button>;
        const buttonThree = <button>You Shall Not Pass</button>;
        return (
            <div>
                <h3>Enter Your Age to Continue</h3>
                <input
                    style={inputStyle}
                    type='number'
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <br />
                {/* Change code below this line */}
                {!Boolean(this.state.userAge) && buttonOne}
                {Boolean(this.state.userAge) && ((this.state.userAge < 18 && buttonThree) || buttonTwo)}
                {/* Change code above this line */}
            </div>
        );
    }
}

/*********************************************************************************** */

class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        {/* Change code below this line */ }
        return (
            <div>
                {this.props.fiftyFifty ? (<h1>You Win!</h1>) : (<h1>You Lose!</h1>)}
            </div>

        );
        {/* Change code above this line */ }
    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {
            // Complete the return statement:
            return {
                counter: prevState.counter + 1
            }
        });
    }
    render() {
        const expression = Math.random() >= .5; // Change this line
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                {/* Change code below this line */}
                <Results fiftyFifty={expression} />

                {/* Change code above this line */}
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}

/*********************************************************************************** */

class GateKeeper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ input: event.target.value })
    }
    render() {
        let inputStyle = {
            border: '1px solid black'
        };
        // Change code below this line
        if (this.state.input.length > 15) {
            inputStyle = {
                border: '3px solid red'
            };
        }
        // Change code above this line
        return (
            <div>
                <h3>Don't Type Too Much:</h3>
                <input
                    type="text"
                    style={inputStyle}
                    value={this.state.input}
                    onChange={this.handleChange} />
            </div>
        );
    }
};

/*********************************************************************************** */

const textAreaStyles = {
    width: 235,
    margin: 5
};

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        // Change code below this line
        this.state = {
            userInput: '',
            toDoList: []
        }

        // Change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDoList.map((key) => {
            return <li>{key}</li>
        }); // Change this line
        return (
            <div>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    style={textAreaStyles}
                    placeholder='Separate Items With Commas'
                />
                <br />
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>My "To Do" List:</h1>
                <ul>{items}</ul>
            </div>
        );
    }
}

/*********************************************************************************** */

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];

function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((key, indx) => { return <li key={indx}>{key}</li> }); // Change this line
    return (
        <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>
                {renderFrameworks}
            </ul>
        </div>
    );
};

/*********************************************************************************** */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true
                },
                {
                    username: 'Alan',
                    online: false
                },
                {
                    username: 'Mary',
                    online: true
                },
                {
                    username: 'Jim',
                    online: false
                },
                {
                    username: 'Sara',
                    online: true
                },
                {
                    username: 'Laura',
                    online: true
                }
            ]
        };
    }
    render() {
        const usersOnline = this.state.users.filter((ele) => {
            return ele.online;
        }); // Change this line
        const renderOnline = usersOnline.map((ele, indx) => {
            return <li key={indx}>{ele.username}</li>;
        }); // Change this line
        return (
            <div>
                <h1>Current Online Users:</h1>
                <ul>{renderOnline}</ul>
            </div>
        );
    }
}

/*********************************************************************************** */

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div />
    }
};

// Change code below this line
ReactDOMServer.renderToString(<App />);

/*********************************************************************************** */


