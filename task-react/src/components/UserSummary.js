import React from "react";

function UserSummary(props) {
  const handleClick = event => {
    event.preventDefault();

    if (typeof props.onClick === "function") {
      props.onClick(props.id);
    }
  };

  return (
    <div className="UserSummary">
      <a onClick={handleClick} href>{props.first_name} {props.last_name}</a>
      {props.DOB}
    </div>
  );
}

export default UserSummary;
