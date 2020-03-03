import React, {Component } from 'react';
import clock from './clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2021',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return(
        <div className="App"> 
     <div className="App-title">
         CountDown to {this.state.deadline}
     </div>
         <clock  deadline={this.state.deadline} />
         <Form inline>
            <FormControl className="Deadline-input"
              placeholder = 'new date'
              onChange={event => this.setState({newDeadline: event.target.value})}    
            />
                <Button onClick = {() => this.changeDeadline()}>
                        submit
                </Button>
        </Form>
       </div>
        );
    }
}

export default App;