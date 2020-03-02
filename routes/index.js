const express = require('express');
const router = express.Router();

const db = require('../db');

// Read and Create ToDo Routes
router
  .route('/')
  .get(async (req, res) => {
    const { rows } = await db.query('SELECT * FROM todos');
    res.send(rows);
  })
  .post(async (req, res) => {
    const {
      rows
    } = await db.query('INSERT INTO todos(todo) VALUES($1) RETURNING *', [
      req.body.todo
    ]);
    res.send(rows);
  });

// Delete ToDo Route
router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query('DELETE FROM todos WHERE todos.id = $1', [
    id
  ]);
  res.send(rows);
});

module.exports = router;
