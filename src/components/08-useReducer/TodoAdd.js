import React from "react";
import PropTypes from "prop-types";
import InputCustom from "./InputCustom";

export const TodoAdd = ({ description, handleSubmit, handleInputChange}) => {
  return (
    <>
      <h4>Add Todo </h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <InputCustom description={description} handleInputChange={handleInputChange} />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

TodoAdd.propTypes = {
    description: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};

export default TodoAdd;
