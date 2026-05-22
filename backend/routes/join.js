// backend/routes/join.js
const express = require('express');
const router = express.Router();
const { createJoinRequest } = require('../controllers/joinController');

// POST /api/join
router.post('/join', createJoinRequest);

module.exports = router;
