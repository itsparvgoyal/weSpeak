// server.js - Backend entry point
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const joinRoutes = require('./routes/join');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "https://we-speak-theta.vercel.app/",
  credentials: true,
}));

app.use(express.json());

// DB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', joinRoutes);

// Simple health check
app.get('/', (req, res) => res.send('We Speak backend is running'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
