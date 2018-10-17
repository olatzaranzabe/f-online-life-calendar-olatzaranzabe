import React, { Component } from 'react';
import '../Stylesheets/App.css';
import Home from './Home';
import Editor from './Editor';
import { Link, Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route
            exact path='/'
            render={() =>
              < Home
                handleAddFace={this.handleAddFace}
              />
            } />
          <Route
            path='/editor'
            render={() =>
              < Editor
                handleCreateMood={this.handleCreateMood}
                handleDelete={this.handleDelete}
              />
            } />
        </Switch>


      </div>
    );
  }
}

export default App;
