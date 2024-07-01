import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
