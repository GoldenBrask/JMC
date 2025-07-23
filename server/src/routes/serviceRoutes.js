const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all services
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM services');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Create a service (protected route in real app)
router.post('/', async (req, res) => {
  const { name, description, category } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO services (name, description, category) VALUES (?, ?, ?)',
      [name, description, category]
    );
    const [rows] = await pool.query('SELECT * FROM services WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
