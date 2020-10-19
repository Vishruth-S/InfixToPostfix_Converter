import React from 'react'
import './Showtables.css'

const Showtables = (props) => {
    const operatorsTable = [...props.tables.operatorsTable]
    const postfixTable = [...props.tables.postfixTable]
    const infix = [...props.tables.infix]
    const rows = [
        <tr key={-1}>
            <th>Infix symbol</th>
            <th>Operator Stack</th>
            <th>Postfix</th>
        </tr>
    ]
    for (const [index, value] of postfixTable.entries()) {
        rows.push(
            <tr key={index}>
                <td className="alignCenter">{infix[index]}</td>
                <td className="alignCenter">{operatorsTable[index]}</td>
                <td>{value}</td>
            </tr>
        )
    }
    return (
        <div className="table-container">
            <table className="table">
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default Showtables
