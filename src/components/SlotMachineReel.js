import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';


export default class SlotMachineReel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: this.props.color
        }
    }


    componentWillReceiveProps(newProps) {
        if (this.props.color !== newProps.color) {
            this.setState({
                color: newProps.color
            })
        } else {
            if (this.state.color === 0) {
                this.setState({
                    color: -576
                })
            } else if (this.state.color === 144) {
                this.setState({
                    color: -432
                })
            } else if (this.state.color === 288) {
                this.setState({
                    color: -288
                })
            } else {
                this.setState({
                    color: -144
                })
            }
        }
    }

    render() {

        return (
            <Spring
                to={{ translate: this.state.color }}
                config={{ mass: 100, tension: 100, friction: 100 }}
            >

                {props => (
                    <div
                        className="slot-wrapper"
                        style={{ transform: `translate3d(0px, ${props.translate}px, 0px)` }}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )
                }


            </Spring>
        )
    }
}

SlotMachineReel.propTypes = {
    color: PropTypes.number
}



