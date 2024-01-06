import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onChange, onClick, city, setCity }) => {
  return (
    // Container for the search bar, relative positioning, and text color
    <div className="relative text-black py-4">
      {/* Input field for user input, with placeholder and styling */}
      <input
        type="text"
        placeholder="Search..."
        className="py-2 pl-8 pr-4 rounded-full border bg-richblack-5 focus:outline-none focus:border-blue-500 w-64 md:w-96"
        onChange={onChange} // Event handler for input changes
        value={city} // Value of the input field (controlled component)
      />
      {/* Icon for search, positioned absolutely to the left of the input */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <AiOutlineSearch onClick={onClick} />{" "}
      </div>
    </div>
  );
};

export default SearchBar;
