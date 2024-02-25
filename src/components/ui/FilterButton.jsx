import React from "react";
// Style
import styled from "styled-components";
// FilterButton Style
export const FilterBox = styled.div`
  padding-top: 1rem;

  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.5rem 0;
    width: 100%;
    background-color: #555;
    border-radius: 0.5rem;
    color: white;
  }

  .active {
    background-color: #000;
  }
`;

const FilterButton = ({ FilterNames, filter, setFilter }) => {
  const FilterButtons = FilterNames.map((filterbutton, index) => (
    <button key={index} className={filterbutton === filter ? "active" : ""} onClick={() => setFilter(filterbutton)}>{filterbutton}</button>
  ));

  return <FilterBox>{FilterButtons}</FilterBox>;
};

export default FilterButton;