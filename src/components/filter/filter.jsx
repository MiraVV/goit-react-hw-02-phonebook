import React from 'react';
import { FilterContainer, FilterName, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterName>Find contacts by name</FilterName>
      <FilterInput
        type="text"
        value={value}
        name="filter"
        onChange={onChange}
      />
    </FilterContainer>
  );
};
