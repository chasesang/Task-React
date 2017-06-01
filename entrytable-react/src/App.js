import React, { Component } from 'react';
import UsersIndex from './components/UsersIndex';

import './App.css';


class App extends Component {
  render() {
  
    return (
      <div className="App">
        <h1>User List</h1>
        <UsersIndex users = {this.props.users}/>

      </div>
    );
  }
}

export default App;
