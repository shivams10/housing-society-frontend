import React from "react";

import "./CommonButton.css";

const CommonButton = ({ value, type, ...restProps }) => {
  return (
    <button className={`${type}`} {...restProps}>
      {value}
    </button>
  );
};

export default CommonButton;
