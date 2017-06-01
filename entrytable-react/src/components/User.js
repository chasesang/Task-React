import React from 'react';

class User extends React.Component {
 render(){
   return (
     <li>
       {this.props.user.first_name} {this.props.user.last_name}
     </li>
   )
 }

};

export default User;
