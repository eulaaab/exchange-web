import * as React from "react";

export const Button = (props) => {
  const {type, caption} = props;
  return (
    <button className="btn btn-primary" type={type}>
      {caption}
    </button>
  );
};
