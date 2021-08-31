import * as React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
      {/* <div className="ui text loader">{props.message || "Loading"}</div> */}
    </div>
  );
};
// this is how we can make a default of props
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
