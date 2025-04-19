import React, { useContext } from 'react';
import { MinumanContext } from '../context/MinumanContext';

const FilterKategori = () => {
  const { setKategori } = useContext(MinumanContext);

  return (
    <select className="form-select w-auto" onChange={(e) => setKategori(e.target.value)}>
      <option value="Semua">Semua</option>
      <option value="Jus">Jus</option>
      <option value="Teh">Teh</option>
      <option value="Susu">Susu</option>
    </select>
  );
};

export default FilterKategori;
