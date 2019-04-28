import React, { Component } from 'react';
import '../css/SlotMachine.css'
import SlotMachineButton from './SlotMachineButton';
import SlotMachineReel from './SlotMachineReel';
import SlotMachineResult from './SlotMachineResult';
import PropTypes from 'prop-types';


//Defining an array for colors
const colors = [0, 144, 288, 432];
var result = 'Press Play Button';

// This function will generate a random element from colors array
const initialRandomColor = () => {
    return colors[Math.floor((Math.random() * colors.length))];
}

//This function will check the result wheather the player wins or not

const checkResult = (array) => {

    if (array[0] === array[1]) {
        if (array[0] === array[2]) {
            return "Whoo! You Win!!"
        } else {
            return "You got close enough!"
        }
    } else {
        return "Better luck next time!"
    }
}


export default class SlotMachine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            randomColor: [initialRandomColor(), initialRandomColor(), initialRandomColor()]
        }
    }

    setNewColor = (array) => {
        if (!this.props.isButtonPressed) {
            result = "Spinning . . ."
            this.setState({
                randomColor: array
            });
            this.props.buttonPressed();
        }


        result = checkResult(array);
    }

    render() {

        return (
            <div className="container">
                <div className="slot-machine">

                    <SlotMachineButton
                        spinTheReel={this.setNewColor.bind(this, [initialRandomColor(), initialRandomColor(), initialRandomColor()])}
                    />

                    <div className="group">

                        <div className="reel">
                            <SlotMachineReel color={this.state.randomColor[0]} />
                        </div>
                        <div className="reel">
                            <SlotMachineReel color={this.state.randomColor[1]} />
                        </div>
                        <div className="reel">
                            <SlotMachineReel color={this.state.randomColor[2]} />
                        </div>

                    </div>
                </div>

                <SlotMachineResult ref="result" result={result} />
            </div>
        );
    }
}

// type checking using proptypes

SlotMachine.propTypes = {
    buttonPressed: PropTypes.func
}