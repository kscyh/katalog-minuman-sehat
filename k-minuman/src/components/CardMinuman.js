import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const CardMinuman = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/api/minuman/${item.id}`)
      .then(() => {
        toast.success("Minuman dihapus");
        window.location.reload(); // sementara
      })
      .catch(() => {
        toast.error("Gagal hapus data");
      });
  };

  return (
    <>
      <div
        className="card h-100 shadow-sm p-3"
        style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
        <div className="card-body">
          <h5 className="card-title">{item.nama}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Rp {item.harga}</h6>
          <p className="card-text">{item.deskripsi}</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="badge bg-success">{item.kategori}</span>
            <button className="btn btn-sm btn-danger" onClick={() => setShowModal(true)}>Hapus</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Konfirmasi</h5>
              </div>
              <div className="modal-body">
                Yakin ingin menghapus "{item.nama}"?
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Batal</button>
                <button className="btn btn-danger" onClick={handleDelete}>Hapus</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardMinuman;
