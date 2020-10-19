import React, { Component } from 'react'
import Showtables from '../ShowTables/Showtables'
import './Converter.css'

class Converter extends Component {
    state = {
        postfix: "",
        postfixTable: [],
        operatorsTable: [],
        infix: []
    }
    componentDidMount() {
        this.setState({
            infix: [...this.props.infix, " "]
        })
        this.convert()
    }
    convert = () => {
        let operatorsTable = []
        let postfixTable = []
        let postfix = []
        let operators = []
        let top = -1
        let infix = [...this.props.infix]
        for (let i = 0; i < infix.length; i++) {
            if (isOperand(infix[i])) {
                postfix += infix[i]
            }
            else if (!isOpeningBracket(infix[i]) && !isClosingBracket(infix[i])) {
                while (operators.length !== 0 && !isOpeningBracket(operators[top]) && getPrecedence(infix[i]) <= getPrecedence(operators[top])) {
                    postfix += operators[top];
                    operators.pop()
                    top -= 1
                }
                operators.push(infix[i])
                top += 1
            }
            else if (isOpeningBracket(infix[i])) {
                operators.push(infix[i]);
                top += 1
            }
            else if (isClosingBracket(infix[i])) {
                while (operators.length !== 0 && !isOpeningBracket(operators[top])) {
                    postfix += operators[top]
                    operators.pop()
                    top -= 1
                }
                operators.pop()
                top -= 1
            }
            operatorsTable.push([...operators])
            postfixTable.push([...postfix])
        }
        while (operators.length !== 0) {
            postfix += operators[top]
            operators.pop()
            top -= 1
            postfixTable.push([...postfix])
            operatorsTable.push([...operators])
        }
        this.setState({
            postfix: postfix,
            postfixTable: postfixTable,
            operatorsTable: operatorsTable
        })
    }
    render() {
        return (
            <div className="converter-main">
                <p className="postfix-exp">Postfix Expression:  <b className="postfix">{this.state.postfix}</b></p>
                <Showtables tables={this.state} />
            </div>
        )
    }
}

function isOperand(ch) {
    return /^[0-9A-Z]$/i.test(ch)
}

function getPrecedence(c) {
    switch (c) {
        case "$":
            return 4;
        case "^":
            return 3;
        case "/":
        case "*":
            return 2;
        case "+":
        case "-":
            return 1;
        default:
            return -1;
    }
}

function isOpeningBracket(c) {
    return c === '(' || c === '{' || c === '['
}

function isClosingBracket(c) {
    return c === ')' || c === '}' || c === ']'
}

export default Converter