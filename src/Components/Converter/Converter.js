import React, { Component } from 'react'
import Showtables from '../ShowTables/Showtables'

class Converter extends Component {
    state = {
        postfix: "",
        postfixTable: [],
        operatorsTable: [],
        infix: []
    }
    // push = (item) => {
    //     postfix.push(item);
    // }
    // pop = () => {
    //     if (length(postfix) != 0)
    //         postfix.pop()
    // }
    componentDidMount() {
        this.setState({
            infix: [...this.props.infix, " "]
        })
        this.convert()
    }
    convert = () => {
        // this.setState({
        //     converting: true
        // })
        let operatorsTable = []
        let postfixTable = []
        let postfix = []
        let operators = []
        let top = -1
        let infix = [...this.props.infix]
        for (let i = 0; i < infix.length; i++) {
            if (isAlpha(infix[i])) {
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
            // console.log(infix[i])
        }
        while (operators.length !== 0) {
            postfix += operators[top]
            operators.pop()
            top -= 1
            postfixTable.push([...postfix])
            operatorsTable.push([...operators])
        }
        // console.log(postfix        
        // postfixTable.push([...postfix])
        // console.log(operatorsTable)
        // console.log(postfixTable)
        this.setState({
            postfix: postfix,
            postfixTable: postfixTable,
            operatorsTable: operatorsTable
        })
    }
    render() {
        return (
            <div>
                {/* {postfixed.map((value, id) => (
                    <span key={id}>{value}</span>
                ))} */}
                <span>{this.state.postfix}</span>
                <Showtables tables={this.state} />
            </div>
        )
    }
}

function isAlpha(ch) {
    return /^[A-Z]$/i.test(ch);
}

function getPrecedence(c) {
    // console.log("c= ", c)
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