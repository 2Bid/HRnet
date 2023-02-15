import React from 'react';
import Select from 'react-select';

import './select.css'

export default function SelectContainer({options, onChange}) {

  return (
    <div className="selectContainer">
      <Select
        placeholder={options[0].value}
        onChange={(e)=>onChange(e)}
        options={options}
      />
    </div>
  );
}