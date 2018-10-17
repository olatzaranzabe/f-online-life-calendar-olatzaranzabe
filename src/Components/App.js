import React, { Component } from 'react';
import '../Stylesheets/App.css';
import Home from './Home';
import Editor from './Editor';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateValue: '',
      inputValue: '',
      moodValue: ':)',
      facesArray: JSON.parse(localStorage.getItem("moodFaces")) || [] 
    }
    this.handleAddMood = this.handleAddMood.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleStateMood = this.handleStateMood.bind(this);
    this.handleCreateMood = this.handleCreateMood.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddMood() {
    console.log('click +');
  }
  handleDate(event) {
    let inputDate = event.target.value;
    this.setState((prevState) => {
      return ({ ...prevState, dateValue: inputDate });
    });
    console.log('date')
  }

  handleStateMood(event) {
    this.setState({ moodValue: event.target.value }, () => console.log(this.state.moodValue));
  }

  handleMessage(event) {
    let inputMessage = event.target.value;
    this.setState((prevState) => {
      return ({ ...prevState, inputValue: inputMessage });
    });
    // this.setState({inputValue: inputMessage });
    console.log(this.state.inputValue);
    console.log(inputMessage)
    console.log('create mood')
  }

  handleDelete() {
    console.log('delete')
  }

  handleCreateMood() {
    // remember localStorage only supports strings
    localStorage.setItem("moodFaces", JSON.stringify(this.state.facesArray));
    console.log('create mood')
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
                handleDate={this.handleDate}
                handleMessage={this.handleMessage}
                handleStateMood={this.handleStateMood}
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
