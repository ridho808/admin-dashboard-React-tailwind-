import React from 'react'
import Select from 'react-select';

export default function Selectmulti() { 
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
        <>
            <Select 
            isMulti
            name="colors" 
            options={options}
            className="basic-multi-select border-2 border-gray-700 rounded-md"
            classNamePrefix="select"/>
        </>
  )
}
