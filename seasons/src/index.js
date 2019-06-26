import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  /*   constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment to this.state
    // this.state = { lat: null, errorMessage: "" };
  } */

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      // we called set state

      // we did not!!! one exception: when we initialize the state in our constructor
      // this.state.lat = position.coords.latitude
      error => this.setState({ errorMessage: error.message })
    );

    console.log('Mounted');
  }

  componentDidUpdate() {
    console.log('Updated');
  }

  // React says we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div className="">Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept the location request!" />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
