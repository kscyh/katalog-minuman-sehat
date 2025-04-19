const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const minumanRoutes = require('./routes/minumanRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routing
app.use('/api/minuman', minumanRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});
