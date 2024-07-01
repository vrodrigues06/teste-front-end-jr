import React from "react";
import PropTypes from "prop-types";

const Title = ({ type, children }) => {
  return (
    <h1 className={`titlePrimary ${type === "brand" ? "brand" : ""}`}>
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
