import React from 'react';
import UserSummary from './UserSummary';
import { getUsers } from '../utilities/requests';

class UsersIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
      search: ''
    }
  }

  componentDidMount() {
    getUsers()
      .then(function (users) {
        this.setState({
          users: users
        });
      }.bind(this));
  }

  _renderUsers() {
    return this.state.users.map((user) => {

      return <UserSummary onClick={this.props.onUserClick} key={user.id} {...user} />
    });
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  render() {
    // let filteredUsers = this.props.users.filter(
    //   (user) => {
    //     return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    //   }
    // )

    return (
      <div className="UsersIndex">
        <h2>Users</h2>
        { this._renderUsers() }
        <input type="text" value={this.state.search}
        onChange={this.updateSearch.bind(this)}/>
      </div>

    );
  }
};

export default UsersIndex;
