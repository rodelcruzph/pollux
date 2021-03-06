import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    };
  }

  componentWillMount() {
    const uri = this.props.uri;

    fetch(uri)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({cars: responseJson.cars});
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className="car-list">
        {this.state.cars.map((car, i) => (
          <CarList key={i} cars={car} />
        ))}
        </ul>
      </div>
    );
  }
}

class CarList extends Component {
  render() {
    return(
      <div>
        <p><span>{this.props.cars.make}</span> : <span>{this.props.cars.model}</span></p>
      </div>
    );
  }
}

export default App;
