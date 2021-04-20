import React from "react";
import PropTypes from "prop-types";

const InputCustom = ({ description, handleInputChange }) => {
  return (
    <input
      type="text"
      name="description"
      className="form-control"
      placeholder="learn..."
      autoComplete="off"
      onChange={handleInputChange}
      value={description}
    />
  );
};

InputCustom.propTypes = {
  description: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputCustom;
