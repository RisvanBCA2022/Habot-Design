import React, { useState } from 'react';

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="focus:text-blue-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Find Service Tags
        <svg
          className="w-2.5 h-2.5 ms-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Tag example 1
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Tag example 2
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Tag example 3
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Tag example 4
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
