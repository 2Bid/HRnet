import React, { useState } from 'react';
import Select from 'react-select';

import './select.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function SelectContainer() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="selectContainer">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}