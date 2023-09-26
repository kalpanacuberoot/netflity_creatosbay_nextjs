import { useState, useRef, useEffect } from 'react';
import Select from 'react-select';

const Creator_MultiSelectDropdown = ({ options,selectedDataArray,onSelectedDataChange  }) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
    onSelectedDataChange(selectedValues);
    
  };

  const optionsdata = options.map((category) => ({
    value: category.id, // Convert id to a string
    label: category.name,
  }));

  console.log("optionsdata",optionsdata,selectedOptions.map((item) => item.value));

  console.log("selectedDataArrayselectedDataArray",selectedDataArray);

  // const selectedDataArray = selectedOptions.map((item) => item.value);

  // const toggleOption = (option) => {
  //   if (selectedOptions.includes(option?.name)) {
  //     setSelectedOptions(selectedOptions.filter((item) => item !== option?.name));
  //     setSelectedMultipleOptionsIds(selectedMultipleOptionsIds.filter((id) => id !== option?.id));
  //   } else {
  //     setSelectedOptions([...selectedOptions, option?.name]);
  //     setSelectedMultipleOptionsIds([...selectedMultipleOptionsIds, option?.id]);
  //   }
  // };

  // console.log("toggleOption", selectedOptions, selectedMultipleOptionsIds);

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  // console.log("options", options);

  const toggleItemSelection = (itemId) => {
    if (selectedItems.includes(itemId)) {
      // Item is already selected, so remove it
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      // Item is not selected, so add it
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <>
      {/* <div className="relative text-left" ref={dropdownRef}>
        <div>
          <span className="rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex justify-between w-full rounded-md border-b-2 border-gray-300 bg-white text-sm px-4 py-2"
              id="options-menu"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              Select Your Industry Types
            </button>
          </span>
        </div>

        {isOpen && (
          <div
            className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              {options?.map((option, index) => (
                <label
                  key={index}
                  className=" flex items-center justify-between px-4 py-2 cursor-pointer"
                >
                  <div className='w-full'>{option?.name}</div>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={selectedOptions.includes(option?.name)}
                    onChange={() => toggleOption(option)}
                  />
                </label>
              ))}
            </div>
          </div>
        )}
      </div> */}
      {/* <div>
        <h2>Select Items:</h2>
        <ul>
          {options.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  value={item.id}
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleItemSelection(item.id)}
                />
                {item.name}
              </label>
            </li>
          ))}
        </ul>

        <h2>Selected Items:</h2>
        <ul>
          {selectedItems.map((itemId) => {
            const selectedItem = options.find((item) => item.id === itemId);
            return (
              <li key={itemId}>
                {selectedItem && (
                  <div>
                    <span>ID: {selectedItem.id}</span>
                    <span>Name: {selectedItem.name}</span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div> */}
      <div>
      <legend className=" text-gray-500 text-base mb-2">Select Your Industry Type</legend>
        <Select
          isMulti
          options={optionsdata}
          value={selectedOptions}
          onChange={handleChange}
        />
        {/* <div>
          <p>Selected Options:</p>
          <ul>
            {selectedOptions.map((option) => (
              <li key={option?.value}>{option?.name} (ID: {option?.value})</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Selected Values as an Array:</p>
          <pre>{JSON.stringify(selectedOptions.map((item) => item.value), null, 2)}</pre>
        </div> */}
      </div>
    </>
  );
};

export default Creator_MultiSelectDropdown;
