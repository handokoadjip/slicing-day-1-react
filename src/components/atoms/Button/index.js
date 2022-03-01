import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const index = (props) => {
  const className = ["btn", "text-uppercase", "px-4"];
  className.push(props.className);
  if (props.isCustom1) className.push("btn-custom-1");
  if (props.isCustom2) className.push("btn-custom-2");

  return (
    <Link className={className.join(" ")} to={props.href}>
      {props.children}
    </Link>
  );
};

index.propTypes = {
  className: propTypes.string,
  isCustom1: propTypes.bool,
  isCustom2: propTypes.bool,
};

export default index;
