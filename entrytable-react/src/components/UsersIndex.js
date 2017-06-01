import React from 'react';
import User from './User';

class UsersIndex extends React.Component {
  constructor() {
    super();
    this.state ={
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

 render(){
   let filteredUsers = this.props.users.filter(
     (user) => {
       return user.first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
     }
   )
   return (
     <div>
       <input type="text"
         value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
     <ul>
       {filteredUsers.map((user)=>{
         return <User user = {user} key={user.id}/>
       })}
     </ul>

   </div>
   )
 }



};

export default UsersIndex;
