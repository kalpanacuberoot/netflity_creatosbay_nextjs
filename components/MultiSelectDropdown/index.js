import { useState } from 'react';

function DropdownWithCheckboxes() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={toggleDropdown}
        >
          Select Options
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <label className="inline-flex items-center mx-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                onChange={() => handleCheckboxChange('Option 1')}
                checked={selectedValues.includes('Option 1')}
              />
              <span className="ml-2">Option 1</span>
            </label>
            <label className="inline-flex items-center mx-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                onChange={() => handleCheckboxChange('Option 2')}
                checked={selectedValues.includes('Option 2')}
              />
              <span className="ml-2">Option 2</span>
            </label>
            {/* Add more options as needed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownWithCheckboxes;
