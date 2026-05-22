// backend/controllers/joinController.js
exports.createJoinRequest = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    if (!name || !email || !department) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const JoinRequest = require('../models/JoinRequest');
    const newRequest = new JoinRequest({ name, email, department });
    await newRequest.save();
    res.status(201).json({ message: 'Join request submitted successfully' });
  } catch (err) {
    console.error('Join request error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
