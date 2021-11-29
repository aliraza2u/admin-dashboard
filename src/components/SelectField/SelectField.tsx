import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IProps {
  searchFieldData: string[] | undefined;
}

const SelectField = (props: IProps) => {
  //! Hooks
  const [search, setSearch] = useState('');

  //! Handle OnChange
  const handleChange = (event: SelectChangeEvent) => {
    setSearch(event.target.value);
  };

  //! Destructuring
  const { searchFieldData } = props;

  return (
    <div>
      <FormControl sx={{ width: 280 }}>
        <InputLabel id="demo-simple-select-helper-label">Search</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={search}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {searchFieldData?.map((x, index) => (
            <MenuItem key={index} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectField;
