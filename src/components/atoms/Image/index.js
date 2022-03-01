import React from "react";
import propTypes from "prop-types";

const index = (props) => {
  const className = ["col-lg-6"];
  className.push(props.className);

  return (
    <div className={className.join(" ")}>
      <figure>
        <img
          className="img-fluid mb-5 mb-lg-0 w-100 d-block mx-auto"
          src={props.src}
          alt={props.alt}
        />
      </figure>
    </div>
  );
};

index.propTypes = {
  className: propTypes.string,
  src: propTypes.string,
  alt: propTypes.string,
};

export default index;
