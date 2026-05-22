// backend/models/JoinRequest.js
const mongoose = require('mongoose');

const joinRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JoinRequest', joinRequestSchema);
