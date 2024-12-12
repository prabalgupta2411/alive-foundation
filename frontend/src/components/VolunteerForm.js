import React, { useState } from "react";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    dob: "",
    gender: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-dark-blue mb-6">
        Become a Volunteer
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-base sm:text-lg text-dark-blue">
            Your Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b6572]"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-base sm:text-lg text-dark-blue">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b6572]"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-base sm:text-lg text-dark-blue">
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b6572]"
            required
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label htmlFor="city" className="text-base sm:text-lg text-dark-blue">
            Your City*
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b6572]"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="dob" className="text-base sm:text-lg text-dark-blue">
              Date of Birth*
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b6572]"
              required
            />
          </div>

          {/* Gender */}
          <div className="flex-1">
            <label
              htmlFor="gender"
              className="text-base sm:text-lg"
            >
              Gender*
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b6572]"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Reason to Join Us */}
        <div className="flex flex-col">
          <label htmlFor="reason" className="text-base sm:text-lg text-dark-blue">
            Reason to Join Us*
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b6572]"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#6a8f9a] hover:bg-[#3b6572] text-white text-base sm:text-lg py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
