import React, { Component } from 'react';
import '../Stylesheets/App.css';
import Home from './Home';
import Editor from './Editor';
import { Route, Switch } from 'react-router-dom';

// let inputMessage;
// let stateMood;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facesArray: JSON.parse(localStorage.getItem("moodFaces")) || [{ dateValue: '', moodValue: '', message: '',}]
    }

    this.handleMessage = this.handleMessage.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleStateMood = this.handleStateMood.bind(this);
    this.handleCreateMood = this.handleCreateMood.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDate(event) {
    let inputDate = event.target.value;
    this.setState((prevState) => {
      return ({ ...prevState, dateValue: inputDate });
    });
    console.log(this.state.dateValue)
    // this.setState({dateValue: inputDate, moodValue: event.target.value, message: inputMessage },
    //   () => console.log(this.state.message));
  }

  handleStateMood(event) {
    let stateMood = event.target.value;
    console.log(this.state.dateValue)
    this.setState({ moodValue: stateMood },
      () => console.log(this.state.moodValue));
  }

  handleMessage(event) {
    let inputMessage = event.target.value;
    this.setState((prevState) => {
      return ({ ...prevState, message: inputMessage});
    });
    console.log(inputMessage)
   
    // this.setState({ moodValue: event.target.value, message: inputMessage },
    //   () => console.log(this.state.message));
  }

  handleDelete() {
    this.setState({ dateValue: '', inputMessage: '', moodValue: '' });
    console.log('delete')
  }

  handleCreateMood() {
    // remember localStorage only supports strings
    localStorage.setItem("moodFaces", JSON.stringify(this.state.facesArray));
     console.log(this.state.facesArray)
    let moodList = this.state.facesArray.push(this.state.moodValue);
    // let info = ({dateValue: inputDate, moodValue: stateMood, message: inputMessage });
    // let moodList = this.state.facesArray.push({dateValue: inputDate, moodValue: event.target.value, message: inputMessage });
    console.log(this.state.facesArray)
    console.log(moodList)
  }

  render() {
    console.log(this.state.dateValue)
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            render={() =>
              < Home
                facesArray={this.state.facesArray}
              />
            } />
          <Route
            path='/editor'
            render={() =>
              < Editor
                moodValue={this.state.moodValue}
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
