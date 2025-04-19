import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Tambah = () => {
  const [form, setForm] = useState({
    nama: '',
    harga: '',
    kategori: '',
    deskripsi: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (form.nama.length < 3) newErrors.nama = 'Nama minuman wajib diisi minimal 3 karakter.';
    if (!form.harga || isNaN(form.harga) || Number(form.harga) <= 0) newErrors.harga = 'Harga harus diisi!.';
    if (!form.kategori) newErrors.kategori = 'Kategori harus diisi.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Data tidak valid!');
      return;
    }

    axios.post('http://localhost:3000/api/minuman', form)
      .then(() => {
        toast.success('Minuman berhasil ditambahkan!');
        setForm({ nama: '', harga: '', kategori: '', deskripsi: '' });
        setErrors({});
      })
      .catch(() => {
        toast.error('Gagal menambahkan minuman.');
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Tambah Minuman Sehat</h2>
      <form onSubmit={handleSubmit} className="card shadow p-4 mx-auto" style={{ maxWidth: 600 }}>
        <div className="mb-3">
          <label className="form-label">Nama Minuman</label>
          <input type="text" name="nama" className={`form-control ${errors.nama && 'is-invalid'}`} value={form.nama} onChange={handleChange} />
          {errors.nama && <div className="invalid-feedback">{errors.nama}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Harga (Rp)</label>
          <input type="number" name="harga" className={`form-control ${errors.harga && 'is-invalid'}`} value={form.harga} onChange={handleChange} />
          {errors.harga && <div className="invalid-feedback">{errors.harga}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Kategori</label>
          <select name="kategori" className={`form-select ${errors.kategori && 'is-invalid'}`} value={form.kategori} onChange={handleChange}>
            <option value="">-- Pilih Kategori --</option>
            <option value="Jus">Jus</option>
            <option value="Teh">Teh</option>
            <option value="Susu">Susu</option>
          </select>
          {errors.kategori && <div className="invalid-feedback">{errors.kategori}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Deskripsi</label>
          <textarea name="deskripsi" className="form-control" value={form.deskripsi} onChange={handleChange} rows="3" />
        </div>

        <button type="submit" className="btn btn-primary w-100">Tambah Minuman</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Tambah;
