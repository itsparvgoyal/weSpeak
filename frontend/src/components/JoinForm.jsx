import React, { useState } from "react";
import api from "../services/api";

const JoinForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", department: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      await axios.post(
        "https://wespeak.onrender.com/api/join",
        formData
      );      
      setStatus({ success: true, message: "Request submitted successfully!" });
      setFormData({ name: "", email: "", department: "" });
    } catch (err) {
      setStatus({ success: false, message: err.response?.data?.error || "Submission failed." });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">Join Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="department">Department</label>
          <input
            id="department"
            name="department"
            type="text"
            required
            value={formData.department}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded transition-colors"
        >
          Submit
        </button>
      </form>
      {status && (
        <p className={`mt-4 text-center ${status.success ? "text-green-400" : "text-red-400"}`}>
          {status.message}
        </p>
      )}
    </div>
  );
};

export default JoinForm;
