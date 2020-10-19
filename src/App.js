import React, { Component } from 'react'
import './App.css'
import Converter from './Components/Converter/Converter'
import Navbar from './Components/Navbar/Navbar'
import 'font-awesome/css/font-awesome.min.css';

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
        if (CheckInputValue(infix)) {
            this.setState({
                infix: infix,
                submitted: true,
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="App">
                    <h2 className="heading">Infix to postfix Converter</h2>
                    <p>This is a tool to convert any infix expression to postfix expression with all steps shown in the table</p>
                    <hr></hr>
                    <h5>How to use?</h5>
                    <p>Enter any infix expression in the input box, for example: A+(B-C)*D/E^F</p>
                    <p><i>If using unary - or +, use $ instead. Example: a*-b must be entered as a*$b</i></p>
                    <p>Press Convert to get the postfix expression and table</p>
                    <div className="input-container">
                        <input className="infix-input" placeholder="Enter infix expression" onChange={this.inputChangeHandler}></input>
                        <button className="convert-btn" onClick={this.submitHandler}>Convert</button>
                    </div>
                    {this.state.submitted ? <Converter infix={this.state.infix} /> : null}
                </div>
                <div className="footer" style={{ display: this.state.submitted ? "block" : "none" }}>
                    <hr></hr>
                    <p>Found any bug? Report it <a href="https://github.com/Vishruth-S/InfixToPostfix_Converter/issues">here</a> </p>
                    <p>Made with <i className="fa fa-heart"></i> by <a href="https://vishruth-s.github.io/Me/">VS</a></p>
                </div>
            </div>
        )
    }
}

function CheckInputValue(str) {
    if (/[^$^*()[\]{}+/\-A-z0-9]/g.test(str))
        return alert("Unsupported characters present.\nValid characters: alphabets[a-z,A-Z], Numbers[0-9], +,-,/,*,^,(),[],{}")
    return true
}

export default App;

