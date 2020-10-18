import React, { Component } from 'react'
import './App.css'
import Converter from './Components/Converter/Converter'

class App extends Component {
    state = {
        submitted: false,
        infix: "",
        inputValue: "",
    }

    inputChangeHandler = (e) => {
        this.setState({
            submitted: false,
            inputValue: e.target.value
        })
    }

    submitHandler = () => {
        let infix = this.state.inputValue
        infix = infix.replace(/\s+/g, '')
        this.setState({
            infix: infix,
            submitted: true,
        })
    }

    render() {
        return (
            <div className="App">
                <h2>Infix to postfix Converter</h2>
                <input placeholder="Enter infix expression" onChange={this.inputChangeHandler}></input>
                <button onClick={this.submitHandler}>Convert</button>
                {this.state.submitted ? <Converter infix={this.state.infix} /> : null}
            </div>
        )
    }
}

export default App;

