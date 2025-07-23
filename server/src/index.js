const express = require('express');
const pool = require('./db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

pool.getConnection()
  .then(conn => {
    console.log('MySQL connected');
    conn.release();
  })
  .catch(err => console.error('MySQL connection error:', err));
app.get('/', (req, res) => res.send('JMC API running'));

// Routes
const serviceRoutes = require('./routes/serviceRoutes');
app.use('/api/services', serviceRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
