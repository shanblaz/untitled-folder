import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
