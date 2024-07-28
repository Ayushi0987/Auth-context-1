const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Make sure you create this model

// CRUD Routes

// Create
router.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

// Read All
router.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Read One
router.get('/items/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

// Update
router.put('/items/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

// Delete
router.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
