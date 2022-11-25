// Npm package
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// react icons
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();

  // State
  const [searchTerm, setSearchTerm] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handelSubmit} className=" p-2 text-gray-400 focus-within:text-gray-600" autoComplete="off">
      <label htmlFor="search-field" className="sr-only">Search all songs</label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          type="search"
          autoComplete="off"
          id="search-field"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none
        placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
