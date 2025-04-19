import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardMinuman from "../components/CardMinuman";

const Home = () => {
  const [minuman, setMinuman] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/minuman')
      .then(res => setMinuman(res.data))
      .catch(err => {
        toast.error("Gagal memuat data minuman");
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Daftar Minuman Sehat</h2>
      <div className="row">
        {minuman.map(item => (
          <div className="col-md-4 mb-3" key={item.id}>
            <CardMinuman item={item} />
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
