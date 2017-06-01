import React from 'react';


function UserSummary (props) {
  const handleClick = event => {
    event.preventDefault();
    if (typeof props.onClick === 'function') {
      props.onClick(props.id);
    }
  }

  return (
    <div
      style={{marginBottom: '10px'}}
      className="UserSummary">
      <a onClick={handleClick} href>{props.title}</a>
    </div>
  );
}

export default UserSummary;
