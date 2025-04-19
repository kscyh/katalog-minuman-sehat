import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MinumanContext = createContext();

export const MinumanProvider = ({ children }) => {
  const [minuman, setMinuman] = useState([]);
  const [filteredMinuman, setFilteredMinuman] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [kategori, setKategori] = useState('Semua');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  // Ambil data dari backend
  useEffect(() => {
    axios.get('http://localhost:3000/api/minuman')
      .then(res => {
        setMinuman(res.data);
        setFilteredMinuman(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Gagal memuat data');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let hasil = [...minuman];

    if (kategori !== 'Semua') {
      hasil = hasil.filter(item => item.kategori.toLowerCase() === kategori.toLowerCase());
    }

    if (search) {
      hasil = hasil.filter(item => item.nama.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredMinuman(hasil);
  }, [kategori, search, minuman]);

  return (
    <MinumanContext.Provider value={{
      minuman: filteredMinuman,
      setKategori,
      setSearch,
      viewMode,
      setViewMode,
      loading,
      error
    }}>
      {children}
    </MinumanContext.Provider>
  );
};
