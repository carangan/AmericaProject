import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    }

    this.click = this.click.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  click() {
    console.log(this.state.username, this.state.password);
  }

  handleChangeUsername(event) {
    // console.log(event.target.value);

    this.setState({
      username: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <p>Hello!</p>
        <input type="text" value={this.state.username} onChange={this.handleChangeUsername}></input>
        <input type="password" value={this.state.password} onChange={this.handleChangePassword}></input>
        <button onClick={this.click} className="helloBtn">Sign Up</button>
      </div>
    );
  }
}

export default App;
