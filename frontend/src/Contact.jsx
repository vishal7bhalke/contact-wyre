import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date_of_birth: "",
    college: "",
    gender: "",
    caste: "",
    mobile_no: "",
    address: "",
    year: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      setStatus("Admission form submitted successfully!");
      toast.success("Form submitted successfully!");
      setForm({
        name: "",
        email: "",
        date_of_birth: "",
        college: "",
        gender: "",
        caste: "",
        mobile_no: "",
        address: "",
        year: ""
      });
    } catch (error) {
      const errMsg = error.response?.data?.message || "Error submitting form.";
      setStatus(errMsg);
      
      toast.error(errMsg);
    }
  };

  return (
    <>
  <div className="w-full flex justify-center mt-4">
  <Link
    to="/admin"
    className="flex items-center gap-2 px-5 py-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
  >
    <span className="text-lg">⬇</span>
    <span>Admin Panel - View Submissions</span>
  </Link>
</div>

    <div className="relative min-h-screen overflow-y-auto bg-gradient-to-br from-blue-300 via-purple-300 to-pink-200 animate-gradient-x py-10 px-4">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300 opacity-20 animate-pulse z-0"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-3xl mx-auto bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 space-y-6 animate-fadeIn"
      >
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-6 tracking-wide drop-shadow-md">
          🎓 Student Admission Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Date of Birth</label>
            <input
              type="date"
              name="date_of_birth"
              value={form.date_of_birth}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
            />
          </div>

          {/* College */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">College Name</label>
            <input
              type="text"
              name="college"
              value={form.college}
              onChange={handleChange}
              placeholder="College Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Caste */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Caste</label>
            <input
              type="text"
              name="caste"
              value={form.caste}
              onChange={handleChange}
              placeholder="Caste"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
            />
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Mobile Number</label>
            <input
              type="text"
              name="mobile_no"
              value={form.mobile_no}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              required
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50 resize-none"
            ></textarea>
          </div>

          {/* Year */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Year</label>
            <input
              type="text"
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="Year (e.g. 1st, 2nd)"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-200 mt-6 text-lg tracking-wide"
        >
          Submit
        </button>

        {/* Status */}
        {status && (
          <p className="text-center text-base mt-4 text-green-600 font-semibold animate-bounce">
            {status}
          </p>
        )}
      </form>
    </div>
    </>
  );
};

export default Contact;
