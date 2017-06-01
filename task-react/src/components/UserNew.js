import React from 'react';
import { addUser } from '../utilities/requests';

class UserNew extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    const fData = new FormData(event.currentTarget);
    addUser({
      title: fData.get('title'),
      body: fData.get('body')
    })
    .then(() => {
      this.props.onBack();
    });
  }

  render () {
    return (
      <div className='UserNew'>
        <h2>New User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title'>Title</label>
            <input id='title' name='title'/>
          </div>

          <div>
            <label htmlFor='body'>Body</label>
            <textarea id='body' name='body' />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default UserNew;
