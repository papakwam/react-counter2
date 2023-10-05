import React, { Component } from 'react';
import './App.css';

//create state
//read the state
//Update the state


class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      age: 23,
      name: "Kofi"
    }
  }

  handleIncrease = () => {
    this.setState({age:this.state.age+1,number:this.state.number+4})
  };

  handleDecrease = () => {
    this.setState({age:this.state.age+1,number:this.state.number+4})
  };

 


  render() {
    return (
    <div className='App'>
      <h1 >{this.state.number}</h1>
      <h1 >{this.state.age}</h1>
      <button onClick={this.handleIncrease}>Add one</button>
      <button onClick={this.handleDecrease}>Add one</button>
    </div>
    )
    
  }
}

export default App;
