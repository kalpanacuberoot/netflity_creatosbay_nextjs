import { useState, useRef, useEffect } from 'react';
import Select from 'react-select';

const Creator_MultiSelectDropdown = ({ options, selectedDataArray, onSelectedDataChange }) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
    onSelectedDataChange(selectedValues);

  };

  const optionsdata = options?.map((category) => ({
    value: category.id, // Convert id to a string
    label: category.name,
  }));

  console.log("optionsdata", optionsdata, selectedOptions.map((item) => item.value));

  console.log("selectedDataArrayselectedDataArray", selectedDataArray);

  const toggleItemSelection = (itemId) => {
    if (selectedItems.includes(itemId)) {
      // Item is already selected, so remove it
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      // Item is not selected, so add it
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const customStateStyles = {
    control: (provided) => ({
        ...provided,
        // borderColor: '#ca8a04',
        cursor:'pointer',
    }),
    menu: (provided) => ({
        ...provided,
        cursor:'pointer',
    }),
    option: (provided, state) => ({
        ...provided,
        cursor:'pointer',
    }),
};

  return (
    <>
      <div>
        <legend className=" font-bold text-base mb-2">Select Your Industry Type</legend>
        <Select
          isMulti
          options={optionsdata}
          value={selectedOptions}
          onChange={handleChange}
          styles={customStateStyles}
        />

      </div>
    </>
  );
};

export default Creator_MultiSelectDropdown;
