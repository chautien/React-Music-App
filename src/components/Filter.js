import React from 'react';

const Filter = ({ onInputChange, filterText }) => {
  const handleInputChange = ({ target: { value } }) => {
    onInputChange(value);
  };
  return (
    <form className="form-filter">
      <input
        onChange={handleInputChange}
        type="text"
        value={filterText}
        className="form-input"
        placeholder="Find by name or author"
      />
    </form>
  );
};

export default Filter;
