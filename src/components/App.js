import React, { Component } from "react";
import "../css/App.css";
import SlotMachineHeader from './SlotMachineHeader';
import SlotMachine from './SlotMachine';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isButtonPressed: false
    }
  }

  buttonPressed() {
    if (!this.state.isButtonPressed) {
      this.setState({
        isButtonPressed: !this.state.isButtonPressed
      });
    }
  }

  render() {
    return (
      <div>
        <SlotMachineHeader />

        <SlotMachine buttonPressed={this.buttonPressed.bind(this)} />
      </div>
    );
  }
}

export default App;
