import React from "react";
import UserSummary from "./UserSummary";
import { getUsers } from "../utilities/requests";

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    getUsers()
      .then(users => {
        this.setState({
          users: users
        })
      }
    );
  }

  renderUsers() {
    return this.state.users.map(user => {
      return (
        <UserSummary onClick={this.props.onUserClick} key={user.id} {...user} />
      );
    });
  }

  render() {
    return (
      <div className="UsersIndex">
        <h2>Users</h2>
        {this.renderUsers()}
      </div>
    );
  }
}

export default UsersIndex;
