import React from "react";
import { addUser } from "../utilities/requests";

class UserNew extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const fData = new FormData(event.currentTarget);

    addUser(
      {
        first_name: fData.get("first_name"),
        last_name: fData.get("last_name"),
        DOB: fData.get("DOB")
      }
    ).then(() => this.props.onBack(event));
  }

  render() {
    return (
      <div className="UserNew">
        <h2>New User</h2>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" name="first_name" />
          </div>

            <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" name="last_name" />
          </div>

          <div className="form-group">
            <label htmlFor="DOB">DOB</label>
            <input type="date"id="DOB" name="DOB" />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserNew;
