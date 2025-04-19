const db = require('../models/db');

// Get all minuman
exports.getAllMinuman = (req, res) => {
  db.query('SELECT * FROM minuman ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Add new minuman
exports.addMinuman = (req, res) => {
  const { nama, harga, kategori, deskripsi } = req.body;
  const sql = 'INSERT INTO minuman (nama, harga, kategori, deskripsi) VALUES (?, ?, ?, ?)';
  db.query(sql, [nama, harga, kategori, deskripsi], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Minuman berhasil ditambahkan', id: result.insertId });
  });
};

// Delete minuman
exports.deleteMinuman = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM minuman WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Minuman berhasil dihapus' });
  });
};

// Get minuman by ID (opsional, untuk edit nanti)
exports.getMinumanById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM minuman WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: "Minuman tidak ditemukan" });
    res.json(results[0]);
  });
};

// Update minuman
exports.updateMinuman = (req, res) => {
  const { id } = req.params;
  const { nama, harga, kategori, deskripsi } = req.body;
  const sql = 'UPDATE minuman SET nama = ?, harga = ?, kategori = ?, deskripsi = ? WHERE id = ?';
  db.query(sql, [nama, harga, kategori, deskripsi, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Minuman berhasil diupdate' });
  });
};
