import React, { Component } from 'react';
import '../Stylesheets/App.css';
import Home from './Home';
import Editor from './Editor';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    this.handleAddFace = this.handleAddFace.bind(this);
  }
  handleAddFace() {
    console.log('click +');
  }

  render() {
    return (
      <div className="App">
        < Home
          handleAddFace={this.handleAddFace}
        />
        < Editor />
      </div>
    );
  }
}

export default App;
