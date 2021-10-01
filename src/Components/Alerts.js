import React from "react";

function Alerts(props) {
  // To capitalize the first letter of alphabet
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    // as prop.alert is initalised at null therefore we will use the syntax props.alert && which shows that first props.alert will be evaluated if it is true then it will move forward otherwise if its false it wont.
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}

export default Alerts;
