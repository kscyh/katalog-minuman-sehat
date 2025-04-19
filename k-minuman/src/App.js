import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tambah from './pages/Tambah';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/">K-Minuman</Link>
          <div>
            <Link className="btn btn-light me-2" to="/">Home</Link>
            <Link className="btn btn-light" to="/tambah">Tambah</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tambah" element={<Tambah />} />
      </Routes>
    </Router>
  );
}
export default App;
