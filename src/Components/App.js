import React, { Component } from 'react';
import '../Stylesheets/App.css';
import Home from './Home';
import Editor from './Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Home/>
        < Editor/>
      </div>
    );
  }
}

export default App;
