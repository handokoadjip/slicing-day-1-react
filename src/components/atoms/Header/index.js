import React from "react";

const index = (props) => {
  return (
    <header className="bg-gradient-1 min-vh-100 d-flex flex-column justify-content-center align-items-center">
      {props.children}
    </header>
  );
};

export default index;
