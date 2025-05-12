import React from "react";

interface FilterBarProps {
  value: string;
  onChange: (value: string) => void;
}

const FilterBar = ({ value, onChange }: FilterBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <h4>Filter tasks by priority</h4>
      <select className="form-select" value={value} onChange={handleChange}>
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
