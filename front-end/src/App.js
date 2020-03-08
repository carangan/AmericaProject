import React, { Component } from 'react';
import './App.css';
import User from './User.js';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      username: "bruh moment",
      password: "",
      users: []
    }

    this.click = this.click.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  componentDidMount() {

    fetch('/api/users')
      .then(res => res.json())
      .then(users => {
        this.setState({
          users: users
        });
      })
      .catch(err => console.error(err));

  }

  click() {
    const { username, users } = this.state;

    const newUser = {
      id: users.length + 1,
      name: username,
    }

    this.setState({
      users: [
        ...users,
        newUser
      ]
    });
  }

  handleChangeUsername(event) {
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
        <div className="inputCon">
          <input className="input-field" type="text" value={this.state.username} onChange={this.handleChangeUsername}></input>
          <input className="input-field" type="password" value={this.state.password} onChange={this.handleChangePassword}></input>
        </div>
        <button onClick={this.click} className="helloBtn">Sign Up</button>
        <p>Current users:</p>
        {
          // this iterates through all the current users and
          // maps them to a new User component
          this.state.users.map((element) => {

            // deconstruct the element
            const { id } = element;

            // create a new User component with a proper greeting
            return <User {...element} key={id}></User>;
          })
        }
      </div>
    );
  }
}

export default App;
