const express = require('express');
const router = express();

router.get('/tickets-categories', (req, res) => {
  res.status(200).json({
    message: 'Get all ticket categories'
  })
})

router.post('/tickets-categories', (req, res) => {
  res.status(200).json({
    message: 'Create a new ticket categories'
  })
})

router.get('/tickets-categories/:id', (req, res) => {
  res.status(200).json({
    message: 'Get one ticket categories'
  })
})

router.put('/tickets-categories/:id', (req, res) => {
  res.status(200).json({
    message: 'Update ticket categories'
  })
})

router.delete('/tickets-categories/:id', (req, res) => {
  res.status(200).json({
    message: 'Delete tickets categories'
  })
})

module.exports = router