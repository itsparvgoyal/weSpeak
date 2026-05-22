// src/pages/JoinUs.jsx
import React, { useState } from 'react';
import api from "../services/api";
import Container from "../components/Container";

const JoinUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', department: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/join', formData);
      setStatus('success');
      setFormData({ name: '', email: '', department: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <Container>
      <section className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Join Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition"
          >
            Submit
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-green-400 text-center">Your request has been submitted!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400 text-center">Something went wrong. Please try again.</p>
        )}
      </section>
    </Container>
  );
};

export default JoinUs;
