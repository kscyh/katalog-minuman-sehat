module.exports = (req, res, next) => {
    const { nama, harga, kategori } = req.body;
  
    if (!nama || nama.trim().length < 3) {
      return res.status(400).json({ message: "Nama minuman tidak valid (minimal 3 huruf)" });
    }
  
    if (!harga || isNaN(harga) || harga <= 0) {
      return res.status(400).json({ message: "Harga harus berupa angka dan lebih dari 0" });
    }
  
    if (!kategori || kategori.trim().length < 2) {
      return res.status(400).json({ message: "Kategori harus diisi" });
    }
  
    next();
  };
  