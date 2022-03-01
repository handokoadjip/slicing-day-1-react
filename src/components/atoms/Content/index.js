import React from "react";
import { Button } from "..";
import propTypes from "prop-types";

const index = (props) => {
  const className = ["col-lg-6", "d-flex", "align-items-center"];
  className.push(props.className);

  let title = "wrapper text-center text-lg-start";
  let subtitle = "text-fade-2 fs-5 mb-1";
  let description = "text-fade-1 text-fade-1 fs-6";
  if (props.textColor === "black") {
    title = "wrapper text-black text-center text-lg-start";
    subtitle = "text-fade-black-2 fs-5 mb-1";
    description = "text-fade-black-1 text-fade-1 fs-6";
  }

  return (
    <div className={className.join(" ")}>
      <div className={title}>
        <h2 className="display-6 pb-0 pb-xl-9 mb-4 ff-marcellus">
          {props.title}
        </h2>
        <div className="mb-4">
          <p className={subtitle}>{props.subtitle}</p>
          <p className={description}>{props.description}</p>
        </div>
        <Button className={props.typeButton} href="#">
          buy now
        </Button>
      </div>
    </div>
  );
};

index.propTypes = {
  className: propTypes.string,
  textColor: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  description: propTypes.string,
  typeButton: propTypes.string,
};

export default index;
