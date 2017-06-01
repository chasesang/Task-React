import React, { Component } from 'react';
import UsersIndex from './components/UsersIndex';
import UserNew from './components/UserNew';

import './App.css';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      to: 'userIndex'
    };


    this.goToUserIndex = this.goToUserIndex.bind(this);
  }


  goToUserIndex () {
    this.setState({
      to: `userIndex`
    })
  }

  goToUserNew () {
    this.setState({
      to: `userNew`
    })
  }

  _renderPath () {
      const [path] = this.state.to.split('#');
      return ({
        userIndex: (
          <UsersIndex
            onUserClick={this.goToUser} />
        ),
        userNew: (
          <UserNew
            onBack={this.goToUserIndex} />
        )
      })[path];
    }




  render() {
    return (
      <div className="App">
        <h1>Users Entry</h1>
        <nav>
          <a
            href
            onClick={e => {
              e.preventDefault();
              this.goToUserNew();
            }}>New User</a> |
          <a
            href
            onClick={e => {
              e.preventDefault();
              this.goToUserIndex();
            }}>All Users</a>
        </nav>
        {this._renderPath()}
      </div>
    );
  }
}

export default App;
