import React, { Component } from 'react'

export default class SlotMachineResult extends Component {
    render() {
        return (
            <div className="result-board">
                <h1>{this.props.result}</h1>
            </div>
        )
    }
}

