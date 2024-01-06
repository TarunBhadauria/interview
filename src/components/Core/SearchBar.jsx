// SearchBar.js
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({onChange,onClick,city,setCity}) => {
  return (
    <div className="relative  text-black py-4">
      <input
        type="text"
        placeholder="Search..."
        className="py-2 pl-8 pr-4 rounded-full border bg-richblack-5 focus:outline-none focus:border-blue-500 w-64 md:w-96"
        onChange={onChange}
        value={city}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <AiOutlineSearch onClick={onClick}/>
      </div>
    </div>
  );
};

export default SearchBar;
