import React, { useContext } from 'react';
import { MinumanContext } from '../context/MinumanContext';

const SearchBar = () => {
  const { setSearch } = useContext(MinumanContext);

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Cari minuman..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
